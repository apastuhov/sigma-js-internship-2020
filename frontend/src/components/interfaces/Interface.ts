import { DTO } from 'dto';

export interface IUser extends DTO.IUser { }
export interface IFriend extends DTO.IFriend { }
export interface IPost extends DTO.IPost { }

export interface IUserPhotoProps {
  isOnline?: boolean;
  photo: string;
}

export interface IAboutProps {
  about: string;
}

export interface ISendPostProps {
  _id: number;
}

export interface IUserMain {
  id: number;
  firstName: string;
  lastName: string;
  photo: string;
}

export interface IFriendsListProps {
  friends: IFriend[];
}

export interface IPostsProps {
  posts: IPost[];
}

export interface IUsers {
  users: IUser[];
}

export enum dataType {
  filter = 'users/filter',
  users = 'users',
  user = 'user/',
  posts = '/getPosts',
  dialogs = 'dialogs'
}
