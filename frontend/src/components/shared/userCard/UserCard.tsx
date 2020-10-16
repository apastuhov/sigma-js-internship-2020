import React, { MouseEvent } from 'react';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import './userCard.scss';
import User from '../../mocks/user-mock.json';
import { UserPhoto } from '../userPhoto/UserPhoto';
import { MainInfo } from '../../interfaces/Interface';

export const UserCard: React.FC = () => {

  let mainInfo: MainInfo = {
    firstName: User.firstName,
    lastName: User.lastName,
    age: User.age,
    country: User.country,
    speaks: User.speaks,
    learn: User.learn,
    online: User.online,
    isFriend: User.isFriend,
    photoUrl: User.photoUrl
  }

  const sendFriendRequest = (event: MouseEvent) => {
    event.preventDefault();
    console.log("Send user friend request");
  };

  return (
    <Box boxShadow={2} className="user-card">
      <Link to="/" className="leftbar">
        <UserPhoto
          online={User.online}
          photoUrl={User.photoUrl}
        />
        <h3>
          {mainInfo.firstName} {mainInfo.lastName}
        </h3>
        <p>{mainInfo.age} y.o.</p>
        <p>
          <span className="flag"></span>
          {mainInfo.country}
        </p>
      </Link>
      <div className="rightbar">
        <div className="speaks">
          <h3>Speaks</h3>
          {mainInfo.speaks.map((speaksInfo, id) => {
            return (
              <div className="languages" key={id}>
                <p>{speaksInfo.language}</p>
                <p>{speaksInfo.level}</p>
              </div>
            );
          })}
        </div>
        <div className="learning">
          <h3>Learning</h3>
          {mainInfo.learn.map((learnInfo, id) => {
            return (
              <div className="languages" key={id}>
                <p>{learnInfo.language}</p>
                <p>{learnInfo.level}</p>
              </div>
            );
          })}
        </div>
        <div className="buttons-action">
          {mainInfo.isFriend === false ? (
            <Link to="/" onClick={sendFriendRequest} className="add-friend">
              add friend
            </Link>
          ) : null}
          <Link to="/chat" className="send-message">
            message
          </Link>
        </div>
      </div>
    </Box>
  );
};
