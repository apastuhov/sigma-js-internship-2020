import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Chat from '../components/pages/chat/Chat';
import Friends from '../components/pages/friends/Friends';
import Login from '../components/pages/login/Login';
import Profile from '../components/pages/profile/Profile';
import Register from '../components/pages/registration/Register';
import Search from '../components/pages/search/Search';
import Settings from '../components/pages/settings/Components/SettingFormikWrapper';
import { FriendsProvider } from '../components/storage/friends/friendsContext';

export default () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/register" component={Register} />
    <FriendsProvider>
      <Route path="/user/:id" exact component={Profile} />
      <Route path="/user/:id/friends" component={Friends} />
      <Route path="/search" component={Search} />
    </FriendsProvider>
    <Route path="/chat" component={Chat} />
    <Route path="/chat/:dialogId" component={Chat} />
    <Route path="/settings" component={Settings} />
  </Switch>
);
