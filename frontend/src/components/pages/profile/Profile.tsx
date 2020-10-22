import React from 'react';
import user from '../../mocks/user-mock.json';
import Layout from '../../shared/layout/Layout';
import UserCard from '../../shared/userCard/UserCard';
import About from './components/about/About';
import AddPostForm from './components/addPostForm/AddPostForm';
import FriendsList from './components/friendsList/FriendsList';
import Posts from './components/posts/Posts';
import './profile.scss';

const Profile: React.FC = () => {
  return (
    <Layout pageTitle="Profile">
      <div className="profile">
        <div className="leftside">
          <UserCard mainInfo={user} boxShadow={2} />
          <About aboutInfo={user.about} />
          <FriendsList friends={user.friends} />
        </div>
        <div className="rightside">
          <AddPostForm />
          <Posts posts={user.posts} />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
