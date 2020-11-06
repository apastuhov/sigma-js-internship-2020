import React, { createContext, Dispatch, useReducer } from 'react';
import { friendReducer, FriendActions } from './reducers';
import { IUser } from '../interfaces/Interface';

type InitialStateType = {
  friends: IUser[];
};

const initialState = {
  friends: []
};

const Context = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<FriendActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = ({ friends }: InitialStateType, action: FriendActions) => ({
  friends: friendReducer(friends, action)
});

const Store: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export { Context, Store };
