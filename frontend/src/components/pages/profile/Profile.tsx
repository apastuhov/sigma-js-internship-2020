import React, { useState } from 'react';
import { getUserFromStorage } from '../../../services/localStorage';
import Layout from '../../shared/layout/Layout';
import UserCard from '../../shared/userCard/UserCard';
import About from './components/about/About';
import AddPostForm from './components/addPostForm/AddPostForm';
import FriendsList from './components/friendsList/FriendsList';
import Posts from './components/posts/Posts';
import './profile.scss';

const Profile: React.FC = () => {
  const [userDetails, setUserDetails] = useState(getUserFromStorage());

  return (
    <Layout pageTitle="Profile">
      <div className="profile">
        <div className="leftside">
          <UserCard mainInfo={userDetails} boxShadow={2} />
          <About aboutInfo={userDetails.about} />
          <FriendsList friends={userDetails.friends} />
        </div>
        <div className="rightside">
          <AddPostForm />
          <Posts posts={userDetails.posts} />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;