import { Document, Types } from 'mongoose';
type ID = Types.ObjectId;

export namespace DTO {
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
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    country: string;
    speaks: ILanguage[];
    learn: ILanguage[];
    isOnline: boolean;
    isFriend: boolean;
    photoUrl: string;
  }

  export interface IUserRegister {
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
    friends: ID[] | IUserRegisterDoc[];
  }

  export interface IUserRegisterDoc extends IUserRegister, Document {}
}
