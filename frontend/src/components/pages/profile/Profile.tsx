import React from 'react';
import './profile.scss';
import User from '../../mocks/user-mock.json';
import Layout from '../../shared/layout/Layout';
import UserCard from '../../shared/userCard/UserCard';
import About from './components/about/About';
import FriendsList from './components/friendsList/FriendsList';
import Posts from './components/posts/Posts';
import AddPostForm from './components/addPostForm/AddPostForm';

const Profile: React.FC = () => {
  return (
    <Layout pageTitle="Profile">
      <div className="profile">
        <div className="leftside">
          <UserCard mainInfo={User} />
          <About aboutInfo={User.about} />
          <FriendsList friends={User.friends} />
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
