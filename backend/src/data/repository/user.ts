import fs from 'fs';
import path from 'path';
import { DTO } from '../../interface';
import { User } from '../models/user';

export class UserRepository {
  async filterAll(name: string): Promise<DTO.IUser[]> {
    this.createUser(name);

    // const users = await this.filterMockUsers();
    // TODO: remove any
    const users = await new Promise<any[]>(resolve =>
      User.find({ name }, (err, data) => {
        resolve(data);
      })
    );
    return users;
  }

  private createUser(name: string) {
    const user = new User({ name });
    user.save(function (err, user) {
      if (err) return console.error(err);
      console.log(user);
    });
  }

  private async filterMockUsers() {
    const pathToMock = path.join(__dirname, '../mocks/users-mock.json');
    const users = await fs.promises.readFile(pathToMock);
    const jsonUsers = JSON.parse(users.toString());
    return jsonUsers;
  }
}

export const userRepository = new UserRepository();
