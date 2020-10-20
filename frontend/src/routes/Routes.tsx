import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Chat from '../components/pages/chat/Chat';
import Login from '../components/pages/login/Login';
import Profile from '../components/pages/profile/Profile';
import Register from '../components/pages/registration/Register';
import Search from '../components/pages/search/Search';
import Settings from '../components/pages/settings/Settings';
import Friends from '../components/pages/friends/Friends';

export default () => (
  <Switch>
    <Route path="/" exact component={Profile} />
    <Route path="/register" component={Register} />
    <Route path="/chat" component={Chat} />
    <Route path="/search" component={Search} />
    <Route path="/settings" component={Settings} />
    <Route path="/login" component={Login} />
    <Route path="/friends" component={Friends} />
    <Route path="/:id" component={Profile} />
  </Switch>
);
