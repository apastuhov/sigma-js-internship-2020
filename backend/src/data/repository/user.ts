import { DTO } from '../../interface';
import { User } from '../models/user';
import { Post } from '../models/post';

export class UserRepository {
  // async filterAll(name: string): Promise<DTO.IUser[]> {
  //   // this.createUser(name);
  //   // const users = await this.filterMockUsers();
  //   // TODO: remove any
  //   // const users = await new Promise<any[]>(resolve =>
  //   //   User.find({ name }, (err, data) => {
  //   //     resolve(data);
  //   //   });
  //   // );
  //   // return users;
  // }

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

  // Posts

  async getAllPostByUserId(ID: DTO.ID): Promise<DTO.IPost[]> {
    const posts = await Post.find({ userId: ID }).populate('creator', ['firstName', 'lastName', 'photo']);
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
