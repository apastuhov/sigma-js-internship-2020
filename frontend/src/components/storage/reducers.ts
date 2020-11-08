import { IUser } from '../interfaces/Interface';
import { ILanguage } from '../interfaces/Interface';

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Get = 'GET_FRIENDS',
  Delete = 'DELETE_FRIEND',
  Add = 'ADD_FRIEND'
}

type FriendPayload = {
  [Types.Get]: {
    _id: string;
    firstName: string;
    lastName: string;
    country: string;
    countryCode: string;
    speak: ILanguage[];
    learn: ILanguage[];
    birthday: Date;
    avatar: string;
  };
  [Types.Delete]: {
    id: string;
  };
  [Types.Add]: {
    id: string;
  };
};

export type FriendActions = ActionMap<FriendPayload>[keyof ActionMap<FriendPayload>];

const friendReducer = (state: IUser[], action: FriendActions) => {
  switch (action.type) {
    case Types.Get:
      return [
        ...state,
        {
          _id: action.payload._id,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          avatar: action.payload.avatar,
          country: action.payload.country,
          countryCode: action.payload.countryCode,
          speak: action.payload.speak,
          learn: action.payload.learn,
          birthday: action.payload.birthday
        }
      ];
    default:
      return state;
  }
};

export { friendReducer };
