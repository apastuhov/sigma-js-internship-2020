export interface MainInfo {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  country: string;
  speaks: {
    language: string;
    level: string;
  }[];
  learn: {
    language: string;
    level: string;
  }[];
  isOnline: boolean;
  isFriend: boolean;
  photoUrl: string;
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
