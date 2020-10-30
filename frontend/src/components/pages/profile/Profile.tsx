import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { getUserFromStorage } from '../../../services/localStorageService';
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
    <>
      {/* TIME DECISION */}
      {userDetails === null
        ? <Redirect to="/login" />
        :
        <Layout pageTitle="Profile">
          <div className="profile">
            <div className="leftside">
              <UserCard mainInfo={userDetails} boxShadow={2} />
              <About about={userDetails.about} />
              <FriendsList friends={userDetails.friends} />
            </div>
            <div className="rightside">
              <AddPostForm />
              <Posts posts={userDetails.posts} />
            </div>
          </div>
        </Layout>
      }
    </>
  );
};

export default Profile;