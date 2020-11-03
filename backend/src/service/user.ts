import { UserRepository, userRepository } from '../data/repository/user';
import { DTO } from '../interface';

class UserService {
  constructor(private userRepo: UserRepository) {}

  // User login

  async checkUserMail(mail: string): Promise<DTO.IUser | null> {
    const data = await this.userRepo.checkUserMail(mail);
    return data;
  }

  async createUser(newUser: DTO.IUser): Promise<DTO.IUserDoc> {
    const data = await this.userRepo.createUser(newUser);
    return data;
  }

  // User friends
  async getUserFriendsById(userId: DTO.ID): Promise<DTO.IUserDoc[] | null> {
    const data = await this.userRepo.getFriendsById(userId);
    return data;
  }

  // Users
  async getUserById(userId: DTO.ID): Promise<DTO.IUserDoc | null> {
    const data = await this.userRepo.getUserById(userId);
    return data;
  }

  // Posts

  async getAllPostByUserId(userId: DTO.ID): Promise<DTO.IPost[]> {
    const posts = await this.userRepo.getAllPostByUserId(userId);
    return posts;
  }

  async createPost(newPost: DTO.IPost): Promise<DTO.IPost> {
    const post = await this.userRepo.createPost(newPost);
    return post;
  }
}

export const userService = new UserService(userRepository);
