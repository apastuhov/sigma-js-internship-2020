import { DTO } from '../../interface';
import { Friends } from '../models/friends';
import { Post } from '../models/post';
import { User } from '../models/user';
import IUserDoc = DTO.IUserDoc;

const userFiels = ['firstName', 'lastName', 'avatar', 'birthday', 'country', 'countryCode', 'speak', 'learn'];

export class UserRepository {
  // Login & Register
  async checkUserMail(mail: string): Promise<DTO.IUserDoc | null> {
    const data = await User.findOne({ email: mail }).populate('friends', ['firstName', 'lastName', 'avatar']);
    return data;
  }

  async createUser(newUser: DTO.IUser): Promise<DTO.IUserDoc> {
    const user = new User(newUser);
    const res = await user.save();
    await UserRepository.addUserIdToFriends(res._id);
    return res;
  }

  async updateUser(ID: DTO.ID, param: IUserDoc): Promise<DTO.IUserDoc | null> {
    const res = await User.findByIdAndUpdate(ID, param, { new: true });
    return res;
  }

  // Friends

  private static async addUserIdToFriends(userId: DTO.ID) {
    const user = new Friends({ userId });
    const data = await user.save();
    return data;
  }

  async getFriendsById(userId: DTO.ID): Promise<DTO.IUserDoc[] | DTO.ID[]> {
    const data = await Friends.findOne({ userId: userId })
      .populate('friends', [...userFiels])
      .then(res => {
        return res?.friends;
      });
    if (!data) return [];
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
        name
          ? {
              $text: {
                $search: name,
                $caseSensitive: false
              }
            }
          : {},
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
    const posts = await Post.find({ userId: ID }).populate('createdBy', ['firstName', 'lastName', 'avatar']);
    return posts;
  }

  async createPost(newPost: DTO.IPost): Promise<DTO.IPostDoc | null> {
    const post = await new Post(newPost).save();
    const data = await Post.findById(post._id).populate('createdBy', ['firstName', 'lastName', 'avatar']);
    return data;
  }
}

export const userRepository = new UserRepository();
