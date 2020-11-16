export namespace DTO {
  export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    country: string;
    countryCode: string;
    speak: ILanguage[];
    learn: ILanguage[];
    isFriend?: boolean;
    birthday: Date;
    avatar: string;
    about: string;
  }

  export interface IUserDetails extends IUser {
    sex: string;
    country: string;
    friends: IFriend[];
    posts: IPost[];
  }

  export interface ILanguage {
    language: string;
    level: string;
  }

  export interface IFriend {
    _id: string;
    firstName: string;
    lastName: string;
    avatar: string;
  }

  export interface IPost {
    _id: string;
    body: string;
    date: string;
    createdBy: IUserDetailsPost;
  }

  export interface IUserDetailsPost {
    _id: string;
    firstName: string;
    lastName: string;
    avatar: string;
  }

  export interface IMessage {
    _id: string;
    userId: string;
    body: string;
    status: number;
    date?: Date;
    isCreatedByCurrentUser: boolean;
  }
  export interface IParticipant {
    _id: string;
    firstName: string;
    lastName: string;
    avatar: string;
  }

  export interface IDialogs {
    _id: string;
    participants: IParticipant[];
    messages: IMessage[];
  }
}
