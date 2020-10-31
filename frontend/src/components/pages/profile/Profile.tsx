import React, { useEffect, useState } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { getUserFromStorage } from '../../../services/localStorageService';
import Layout from '../../shared/layout/Layout';
import UserCard from '../../shared/userCard/UserCard';
import { dataType } from '../../interfaces/Interface';
import About from './components/about/About';
import AddPostForm from './components/addPostForm/AddPostForm';
import FriendsList from './components/friendsList/FriendsList';
import Posts from './components/posts/Posts';
import './profile.scss';
import { useLocation } from 'react-router-dom';
import filterUserPosts from '../../../services/getPostService';
import filterUserDetails from '../../../services/getUserDetails';


interface MatchParams {
  id: number & string;
}

interface IParamsProps extends RouteComponentProps<MatchParams> { }

const Profile: React.FC<IParamsProps> = (props) => {
  const [userDetails, setUserDetails] = useState(getUserFromStorage());
  const [userPost, setUserPost] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const userId = props.match.params.id;
    if (userId === undefined) {
      const user = getUserFromStorage();
      setUserDetails(user);
      setUserPost(user.posts);
    } else {
      filterUserDetails(dataType.user, userId).then(user => setUserDetails(user));
      filterUserPosts(userId, dataType.posts).then(posts => setUserPost(posts));
    }
  }, [location]);

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
              <Posts posts={userPost} />
            </div>
          </div>
        </Layout>
      }
    </>
  );
};

export default Profile;