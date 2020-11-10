import { Document, Types } from 'mongoose';

export namespace DTO {
  export type ID = Types.ObjectId;

  export interface FilterRequest {
    name: string;
    birthdateFrom: string;
    birthdateTo: string;
    sex: string[];
    country: string;
    language: string;
    level: string;
    isOnline: boolean;
  }

  export interface ILanguage {
    language: string;
    level: string;
  }

  export interface IUser {
    firstName: string;
    lastName: string;
    sex: string;
    email: string;
    birthday: string;
    country: string;
    countryCode: string;
    speak: ILanguage[];
    learn: ILanguage[];
    avatar: string;
    about: string;
  }

  export interface IPost {
    userId: ID;
    body: string;
    date?: Date;
    createdBy: ID;
  }

  export interface IMessage {
    userId: ID;
    body: string;
    status: number;
    date: Date;
  }

  export interface IDialogs {
    participants: ID[];
    messages: IMessage[];
  }

  export interface IUserFriends {
    userId: ID;
    friends: ID[] | IUserDoc[];
  }

  export interface IUserFriendsDoc extends IUserFriends, Document {}
  export interface IMessageDoc extends IMessage, Document {}
  export interface IDialogsDoc extends IDialogs, Document {}
  export interface IPostDoc extends IPost, Document {}
  export interface IUserDoc extends IUser, Document {}
}
