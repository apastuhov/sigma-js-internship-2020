import { UserRepository, userRepository } from '../data/repository/user';
import { DTO } from '../interface';

class UserService {
  constructor(private userRepo: UserRepository) {}

  async search(username: string): Promise<DTO.IUser[]> {
    const data = await this.userRepo.filterAll(username);
    return data;
  }

  async getAllUsers() {
    const data = await this.userRepo.getAllUsers();
    return data;
  }

  async createUser(newUser: DTO.IUser) {
    const data = await this.userRepo.createUser(newUser);
    return data;
  }
}

export const userService = new UserService(userRepository);
