import { DTO } from 'dto';
import { sex } from '../constants/constants';
import { Country } from '../constants/Countries';

export interface IUser extends DTO.IUser {}
export interface IFriend extends DTO.IFriend {}
export interface IPost extends DTO.IPost {}
export interface ILanguage extends DTO.ILanguage {}
export interface IMessage extends DTO.IMessage {}

export interface IUserPhotoProps {
  isOnline?: boolean;
  avatar: string;
}

export interface IAboutProps {
  about: string;
}

export interface IFriendsListProps {
  id: string;
  friends: IFriend[];
}

export interface ISendPostProps {
  _id: string;
  sendUserPost(userId: string, request: {}): any;
}

export interface IPostsProps {
  posts: IPost[];
}

export interface IUsers {
  users: IUser[];
}

export enum dataType {
  filter = 'user/filter',
  user = 'user',
  posts = 'posts',
  chat = 'chat',
  dialogs = 'dialogs',
  message = 'message'
}

export type FormikValues = {
  name: string;
  surname: string;
  age: number;
  birthday: string;
  languages: ILanguage[];
  learnLanguages: ILanguage[];
  fileUrl: string;
  sex: keyof typeof sex;
  country: keyof typeof Country;
  about: string;
};

export enum status {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE'
}

export interface ParamTypes {
  currentDialogId: string;
}
