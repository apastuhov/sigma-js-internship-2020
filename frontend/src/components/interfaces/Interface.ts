interface User extends MainInfo {
  sex: string;
  birthday: number;
  country: string;
  friends: Friend[];
  posts: Post[];
}

export default User;

export interface MainInfo {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  country: string;
  speaks: Languages[];
  learn: Languages[];
  isOnline: boolean;
  isFriend: boolean;
  photoUrl: string;
}

export interface MainInfoProps {
  mainInfo: MainInfo;
}

export interface Languages {
  language: string;
  level: string;
}

export interface UserPhotoInfo {
  isOnline: boolean;
  photoUrl: string;
}

export interface AboutInfo {
  aboutInfo: string;
}

export interface IUserMain {
  id: number;
  firstName: string;
  lastName: string;
  photoUrl: string;
}

export interface Friend {
  id: number;
  photoUrl: string;
  firstName: string;
  lastName: string;
  isOnline: boolean;
}

export interface FriendsListProps {
  friends: Friend[];
}

export interface Post {
  id: number;
  body: string;
  date: string;
  time: string;
  user: IUserMain;
}

export interface ProfilePosts {
  posts: Post[];
}

export interface IUsers {
  users: MainInfo[];
}

export enum dataType {
  filter = 'users/filter',
  users = 'users',
  posts = 'posts',
  dialogs = 'dialogs'
}
