import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import Chat from '../components/pages/chat/Chat';
import Friends from '../components/pages/friends/Friends';
import Login from '../components/pages/login/Login';
import Profile from '../components/pages/profile/Profile';
import Register from '../components/pages/registration/Register';
import Search from '../components/pages/search/Search';
import Settings from '../components/pages/settings/Components/SettingFormikWrapper';
import { FriendsProvider } from '../components/storage/friends/friendsContext';
import { getUserFromStorage } from '../services/sessionStorageService';
import { onConnect } from '../socket/dialogSocket';

interface Props {
  Component: React.FC<RouteComponentProps>;
  path: string;
  exact?: boolean;
}

const PrivateRoute = ({ Component, path, exact = false }: Props): JSX.Element => {
  const user = getUserFromStorage();
  const isAuthed = !!user;
  if (isAuthed) {
    onConnect(user._id);
  }
  return (
    <Route
      exact={exact}
      path={path}
      render={(props: RouteComponentProps) => (isAuthed ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <PrivateRoute path="/register" Component={Register} />
    <PrivateRoute path="/chat/:userId/dialogs" Component={Chat} />
    <PrivateRoute path="/chat/:currentDialogId" exact Component={Chat} />
    <PrivateRoute path="/settings" Component={Settings} />
    <FriendsProvider>
      <PrivateRoute path="/user/:id" exact Component={Profile} />
      <PrivateRoute path="/user/:id/friends" Component={Friends} />
      <PrivateRoute path="/search" Component={Search} />
    </FriendsProvider>
  </Switch>
);
