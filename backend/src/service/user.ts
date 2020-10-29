import { UserRepository, userRepository } from '../data/repository/user';
import { DTO } from '../interface';

class UserService {
  constructor(private userRepo: UserRepository) {}

  async search(parameters: DTO.User.FilterRequest): Promise<DTO.IUser[]> {
    const data = await this.userRepo.filterAll(parameters);
    return data;
  }

  async getAllUsers() {
    const data = await this.userRepo.getAllUsers();
    return data;
  }
}

export const userService = new UserService(userRepository);
