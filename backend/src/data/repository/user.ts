import { DTO } from '../../interface';
import { Friends } from '../models/friends';
import { Post } from '../models/post';
import { User } from '../models/user';
import { Dialog } from '../models/dialog';
import IUserDoc = DTO.IUserDoc;

const userFiels = ['firstName', 'lastName', 'photo', 'birthday', 'country', 'speak', 'learn'];

export class UserRepository {
  // Login & Register
  async checkUserMail(mail: string): Promise<DTO.IUserDoc | null> {
    const data = await User.findOne({ email: mail }).populate('friends', ['firstName', 'lastName', 'photo']);
    return data;
  }

  async createUser(newUser: DTO.IUser): Promise<DTO.IUserDoc> {
    const user = new User(newUser);
    const res = await user.save();
    return res._id;
  }

  async updateUser(ID: DTO.ID, param: IUserDoc): Promise<DTO.IUserDoc | null> {
    const res = await User.findByIdAndUpdate(ID, param).exec();
    return res;
  }

  // Friends

  async getFriendsById(userId: DTO.ID): Promise<DTO.IUserDoc[] | DTO.ID[]> {
    const data = await Friends.findOne({ userId: userId })
      .populate('friends', [...userFiels])
      .then(res => {
        return res?.friends;
      });
    if (!data) return [];
    return data;
  }

  // User data

  async getUserById(userId: DTO.ID): Promise<DTO.IUserDoc | null> {
    const data = await User.findById(userId).populate('friends', ['firstName', 'lastName', 'photo']);
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

  //Dialogs

  async createDialog(newDialog: DTO.IDialogs): Promise<DTO.IDialogs> {
    const dialog = new Dialog(newDialog);
    const res = await dialog.save(function (err, dialog) {
      if (err) return console.error(err);
      return dialog;
    });
    return res;
  }
}

export const userRepository = new UserRepository();
