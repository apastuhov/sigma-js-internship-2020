import { DTO } from '../../interface';
import { User } from '../models/user';
import { Post } from '../models/post';

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

  async getFriendsById(userId: DTO.ID): Promise<DTO.IUserDoc | null> {
    const data = await User.findById(userId).populate('friends', ['firstName', 'lastName', 'photo', 'birthday', 'country', 'speak', 'learn']);
    return data;
  }

  // User data

  async getUserById(userId: DTO.ID): Promise<DTO.IUserDoc | null> {
    const data = await User.findById(userId).populate('friends', ['firstName', 'lastName', 'photo']);
    return data;
  }

  async getUsers(): Promise<DTO.IUserDoc[] | null> {
    const data = await User.find(
      {},
      { firstName: 1, lastName: 1, photo: 1, birthday: 1, country: 1, speak: 1, learn: 1 }
    ).limit(5);
    return data;
  }
  // Search

  async getUsersByParams(params: DTO.FilterRequest): Promise<DTO.IUserDoc[] | null> {
    const { name, lowAge, highAge, sex, country, language, level } = params;
    const data = await User.find({
      $and: [
        {
          $expr: {
            $regexMatch: {
              input: { $concat: ['$firstName', ' ', '$lastName'] },
              regex: name,
              options: 'i'
            }
          }
        },
        {
          birthday: {
            $gte: new Date(highAge).toISOString(),
            $lte: new Date(lowAge).toISOString()
          }
        },
        sex ? { sex: { $in: sex } } : {},
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
