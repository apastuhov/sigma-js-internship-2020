export interface User {
  user: {
    id: number;
    firstName: string;
    lastName: string;
    sex: number;
    age: number;
    birthday: number;
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
    isFriend: number;
    photoUrl: string;
    friends: {
      id: number;
      photoUrl: string;
      firstName: string;
      lastName: string;
      isOnline: boolean;
    }[];
    posts: {
      id: number;
      body: string;
      date: string;
      time: string;
      user: {
        id: number;
        firstName: string;
        lastName: string;
        photoUrl: string;
      };
    }[];
  };
}

export interface MainInfo {
  mainInfo: {
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
    isFriend: number;
    photoUrl: string;
  };
}

export interface UserPhotoInfo {
  photoInfo: {
    isOnline: boolean;
    photoUrl: string;
  };
}

export interface AboutInfo {
  aboutInfo: string;
}

export interface ListOfFriends {
  friends: {
    id: number;
    photoUrl: string;
    firstName: string;
    lastName: string;
    isOnline: boolean;
  }[];
}

export interface PostsList {
  posts: {
    id: number;
    body: string;
    date: string;
    time: string;
    user: {
      id: number;
      firstName: string;
      lastName: string;
      photoUrl: string;
    };
  }[];
  isOnline: boolean;
  isFriend: boolean;
  photoUrl: string;
}

export interface IUsers {
  users: MainInfo[];
}