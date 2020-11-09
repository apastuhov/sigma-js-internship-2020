import React, { useEffect, useState } from 'react';
import { Redirect, RouteComponentProps, useLocation } from 'react-router-dom';
import { getUserDetails } from '../../../services/apiUserService';
import { getUserFromStorage } from '../../../services/localStorageService';
import { getUserPosts } from '../../../services/postService';
import Layout from '../../shared/layout/Layout';
import UserCard from '../../shared/userCard/UserCard';
import About from './components/about/About';
import AddPostForm from './components/addPostForm/AddPostForm';
import Posts from './components/posts/Posts';
import './profile.scss';

interface MatchParams {
  id: number & string;
}

interface IParamsProps extends RouteComponentProps<MatchParams> {}

const Profile: React.FC<IParamsProps> = props => {
  const [userDetails, setUserDetails] = useState(getUserFromStorage());
  const [userPosts, setUserPosts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const userId = props.match.params.id;
    if (!userId) {
      const user = getUserFromStorage();
      setUserDetails(user);
      getUserPosts(userDetails._id).then(posts => setUserPosts(posts));
    } else {
      getUserDetails(userId).then(user => setUserDetails(user));
      getUserPosts(userId).then(posts => setUserPosts(posts));
    }
  }, [location]);

  return (
    <>
      {/* TIME DECISION */}
      {!userDetails ? (
        <Redirect to="/login" />
      ) : (
        <Layout pageTitle="Profile">
          <div className="profile">
            <div className="leftside">
              <UserCard mainInfo={userDetails} boxShadow={2} isProfile />
              <About about={userDetails.about} />
              {/* <FriendsList id={userDetails._id} friends={userDetails.friends} /> */}
            </div>
            <div className="rightside">
              <AddPostForm _id={userDetails._id} />
              <Posts posts={userPosts} />
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default Profile;
