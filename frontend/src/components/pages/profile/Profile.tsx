import React, { useEffect, useState } from 'react';
import { Redirect, RouteComponentProps, useLocation } from 'react-router-dom';
import { getFriends, getUserDetails } from '../../../services/apiUserService';
import { getUserPosts } from '../../../services/postService';
import { getUserFromStorage } from '../../../services/sessionStorageService';
import Layout from '../../shared/layout/Layout';
import UserCard from '../../shared/userCard/UserCard';
import About from './components/about/About';
import AddPostForm from './components/addPostForm/AddPostForm';
import FriendsList from './components/friendsList/FriendsList';
import Posts from './components/posts/Posts';
import './profile.scss';

interface MatchParams {
  id: number & string;
}

interface IParamsProps extends RouteComponentProps<MatchParams> {}

const Profile: React.FC<IParamsProps> = props => {
  const [userDetails, setUserDetails] = useState(getUserFromStorage());
  const [friends, setFriends] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const location = useLocation();
  const userId = props.match.params.id;
  const { _id } = getUserFromStorage();

  useEffect(() => {
    if (!userId) {
      const user = getUserFromStorage();
      setUserDetails(user);
      getUserPosts(userDetails._id).then(posts => setUserPosts(posts));
      getFriends(userDetails._id).then(users => setFriends(users));
    } else {
      getUserDetails(userId).then(user => setUserDetails(user));
      getUserPosts(userId).then(posts => setUserPosts(posts));
      getFriends(userId).then(users => setFriends(users));
    }
  }, [location, userId, userDetails._id]);

  return (
    <>
      {/* TIME DECISION */}
      {!userDetails ? (
        <Redirect to="/login" />
      ) : (
        <Layout pageTitle={`${userDetails._id === _id ? 'My' : ''} Profile`}>
          <div className="profile">
            <div className="leftside">
              <UserCard mainInfo={userDetails} boxShadow={2} isProfile />
              <About about={userDetails.about} />
              <FriendsList id={userDetails._id} friends={friends} />
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
