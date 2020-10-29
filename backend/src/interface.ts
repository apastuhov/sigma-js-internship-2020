import { Document, Types } from 'mongoose';

export namespace DTO {
  export type ID = Types.ObjectId;
  export namespace User {
    export interface FilterRequest {
      name: string;
    }
  }

  export interface ILanguage {
    language: string;
    level: string;
  }

  export interface IUser {
    firstName: string;
    lastName: string;
    sex: number;
    email: string;
    birthday: string;
    country: string;
    speak: ILanguage[];
    learn: ILanguage[];
    photo: string;
    about: string;
    friends: ID[] | IUserDoc[];
  }

  export interface IPost {
    userId: ID;
    body: string;
    date: Date;
    creator: ID;
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

  export interface IMessageDoc extends IMessage, Document {}
  export interface IDialogsDoc extends IDialogs, Document {}
  export interface IPostDoc extends IPost, Document {}
  export interface IUserDoc extends IUser, Document {}
}
