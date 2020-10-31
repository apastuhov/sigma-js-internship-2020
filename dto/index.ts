export namespace DTO {
  export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    country: string;
    countryCode: string;
    speak: ILanguage[];
    learn: ILanguage[];
    isFriend: boolean;
    photo: string;
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
    _id: number;
    firstName: string;
    lastName: string;
    photo: string;
  }

  export interface IPost {
    _id: number;
    body: string;
    date: string;
    creator: IUserDetailsPost;
  }

  export interface IUserDetailsPost {
    _id: number;
    firstName: string;
    lastName: string;
    photo: string;
  }

}
