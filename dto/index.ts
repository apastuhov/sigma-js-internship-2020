export namespace DTO {
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

  export interface IUserDetails extends IUser {
    sex: string;
    birthday: number;
    country: string;
    friends: IFriend[];
    posts: IPost[];
  }

  export interface ILanguage {
    language: string;
    level: string;
  }

  export interface IFriend {
    id: number;
    photoUrl: string;
    firstName: string;
    lastName: string;
    isOnline: boolean;
  }

  export interface IPost {
    id: number;
    body: string;
    date: string;
    time: string;
    user: IUserPostDetails;
  }

  export interface IUserPostDetails {
    id: number;
    firstName: string;
    lastName: string;
    photoUrl: string;
  }

}

