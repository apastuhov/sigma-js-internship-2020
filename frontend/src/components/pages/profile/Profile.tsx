import React from 'react';
import User from '../../mocks/user-mock.json';
import Layout from '../../shared/layout/Layout';
import './profile.scss';
import { UserCard } from '../../shared/userCard/UserCard';
import About from './components/about/About';
import FriendsList from './components/friendsList/FriendsList';
import AddPostForm from './components/addPostForm/AddPostForm';
import Posts from './components/posts/Posts';

const Profile: React.FC = () => {
  return (
    <Layout pageTitle="Profile">
      <div className="profile">
        <div className="leftside">
          <UserCard user={User} />
          <About aboutInfo={User.about} />
          <FriendsList friendsList={User.friends} />
        </div>
        <div className="rightside">
          <AddPostForm />
          <Posts posts={User.posts} />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;