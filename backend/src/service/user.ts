import { UserRepository, userRepository } from '../data/repository/user';
import { DTO, status } from '../interface';
import IUserDoc = DTO.IUserDoc;

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

  async updateUser(ID: DTO.ID, param: IUserDoc): Promise<DTO.IUserDoc | null> {
    const data = await this.userRepo.updateUser(ID, param);
    return data;
  }

  // User friends
  async getUserFriendsById(userId: DTO.ID): Promise<DTO.IUserDoc[] | DTO.ID[]> {
    const data = await this.userRepo.getFriendsById(userId);
    return data;
  }

  async addFriend(userId: DTO.ID, friendId: DTO.ID) {
    const res = await this.userRepo.addFriend(userId, friendId);
    if (!res) return status.FAILURE;
    return status.SUCCESS;
  }

  // Users

  async getUserById(userId: DTO.ID): Promise<DTO.IUserDoc | null> {
    const data = await this.userRepo.getUserById(userId);
    return data;
  }

  async getUsers(): Promise<DTO.IUserDoc[] | null> {
    const data = await this.userRepo.getUsers();
    return data;
  }

  async getUsersByParams(params: DTO.FilterRequest): Promise<DTO.IUserDoc[] | null> {
    const data = await this.userRepo.getUsersByParams(params);
    return data;
  }

  // Posts

  async getAllPostByUserId(userId: DTO.ID): Promise<DTO.IPost[]> {
    const posts = await this.userRepo.getAllPostByUserId(userId);
    return posts;
  }

  async createPost(newPost: DTO.IPost): Promise<DTO.IPostDoc | null> {
    const post = await this.userRepo.createPost(newPost);
    return post;
  }
}

export const userService = new UserService(userRepository);
