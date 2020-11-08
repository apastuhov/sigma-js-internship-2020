import { DTO } from '../../interface';
import { Friends } from '../models/friends';
import { Post } from '../models/post';
import { User } from '../models/user';

const userFiels = ['firstName', 'lastName', 'photo', 'birthday', 'country', 'speak', 'learn'];

export class UserRepository {
  // Login & Register
  async checkUserMail(mail: string): Promise<DTO.IUserDoc | null> {
    const data = await User.findOne({ email: mail }).populate('friends', ['firstName', 'lastName', 'photo']);
    return data;
  }

  async createUser(newUser: DTO.IUser): Promise<DTO.IUserDoc> {
    const user = new User(newUser);
    const res = await user.save(function (err, user) {
      if (err) return console.error(err);
      return user;
    });
    return res;
  }

  // Friends

  async getFriendsById(userId: DTO.ID): Promise<DTO.IUserDoc[] | DTO.ID[]> {
    const data = await Friends.findOne({ userId: userId })
      .populate('friends', [...userFiels])
      .then(res => res?.friends || []);
    return data;
  }

  async addFriend(userId: DTO.ID, friendId: DTO.ID) {
    const data = await Friends.updateOne({ userId: userId }, { $addToSet: { friends: friendId } }).then(res => {
      return res.nModified;
    });
    return data;
  }

  // User data

  async getUserById(userId: DTO.ID): Promise<DTO.IUserDoc | null> {
    const data = await User.findById(userId);
    return data;
  }

  async getUsers(): Promise<DTO.IUserDoc[] | null> {
    const data = await User.find({});
    return data;
  }

  // Search

  async getUsersByParams(params: DTO.FilterRequest): Promise<DTO.IUserDoc[] | null> {
    const { name, birthdateFrom, birthdateTo, sex, country, language, level } = params;
    const data = await User.find({
      $and: [
        {
          $expr: {
            $function: {
              body: `function(firstName, lastName) {return (firstName + ' ' + lastName).toLowerCase().includes('${name
                .trim()
                .toLowerCase()}')}`,
              args: ['$firstName', '$lastName'],
              lang: 'js'
            }
          }
        },
        {
          birthday: {
            $gte: birthdateFrom,
            $lte: birthdateTo
          }
        },
        sex.length ? { sex: { $in: sex } } : {},
        country ? { country: country } : {},
        language ? { 'speak.language': language } : {},
        level ? { 'speak.level': level } : {}
      ]
    });
    return data;
  }

  // Posts

  async getAllPostByUserId(ID: DTO.ID): Promise<DTO.IPost[]> {
    const posts = await Post.find({ userId: ID }).populate('createdBy', ['firstName', 'lastName', 'photo']);
    return posts;
  }

  async createPost(newPost: DTO.IPost): Promise<DTO.IPost> {
    const post = new Post(newPost);
    const res = await post.save(function (err, post) {
      if (err) return console.error(err);
      return post;
    });
    return res;
  }
}

export const userRepository = new UserRepository();
