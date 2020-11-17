import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useLocation } from 'react-router-dom';
import { getFriends, getUserDetails } from '../../../services/apiUserService';
import { getUserPosts, sendPostToUser } from '../../../services/postService';
import { getUserFromStorage, isCurrentUser } from '../../../services/sessionStorageService';
import Layout from '../../shared/layout/Layout';
import UserCard from '../../shared/userCard/UserCard';
import About from './components/about/About';
import AddPostForm from './components/addPostForm/AddPostForm';
import FriendsList from './components/friendsList/FriendsList';
import Posts from './components/posts/Posts';
import './profile.scss';
import { IPost } from '../../interfaces/Interface';

interface MatchParams {
  id?: string;
}

interface IParamsProps extends RouteComponentProps<MatchParams> {}

const Profile: React.FC<IParamsProps> = props => {
  const [userDetails, setUserDetails] = useState(getUserFromStorage());
  const [friends, setFriends] = useState([]);
  const [userPosts, setUserPosts] = useState<IPost[]>([]);
  const location = useLocation();
  const userId = props.match.params.id;

  useEffect(() => {
    const user = getUserFromStorage();
    if (userId === user._id) {
      setUserDetails(user);
      getUserPosts(userDetails._id).then(posts => setUserPosts(posts));
      getFriends(userDetails._id).then(users => setFriends(users));
    } else {
      getUserDetails(userId).then(user => setUserDetails(user));
      getUserPosts(userId).then(posts => setUserPosts(posts));
      getFriends(userId).then(users => setFriends(users));
    }
  }, [location, userId, userDetails._id]);

  const sendUserPost = (userId: string, post: IPost) => {
    sendPostToUser(userId, post).then(post => setUserPosts((oldPosts) => [...oldPosts, post]));
  }
  
  return (
    <Layout pageTitle={`${isCurrentUser(userId) ? 'My' : ''} Profile`}>
      <div className="profile">
        <div className="leftside">
          <UserCard mainInfo={userDetails} boxShadow={2} isProfile />
          <About about={userDetails.about} />
          <FriendsList id={userDetails._id} friends={friends} />
        </div>
        <div className="rightside">
          <AddPostForm _id={userDetails._id} sendUserPost={sendUserPost} />
          <Posts posts={userPosts} />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
