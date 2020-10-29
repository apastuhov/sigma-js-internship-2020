export namespace DTO {
  export namespace User {
    export interface FilterRequest {
      name: string;
      lowAge: number;
      highAge: number;
      country: string;
      language: string;
      level: string;
      isOnline: boolean;
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
}
