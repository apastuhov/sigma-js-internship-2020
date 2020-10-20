import React, { MouseEvent } from 'react';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import './userCard.scss';
import { UserPhoto } from '../userPhoto/UserPhoto';
import { MainInfo } from '../../interfaces/Interface';

export const UserCard: React.FC<MainInfo> = ({ mainInfo }) => {
  console.log(mainInfo.isOnline);
  const sendFriendRequest = (event: MouseEvent) => {
    event.preventDefault();
    console.log('Send user friend request');
  };

  return (
    <Box boxShadow={2} className="user-card">
      <Link to="/" className="leftbar">
        <UserPhoto photoInfo={mainInfo} />
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
          {mainInfo.isFriend === 0 ? (
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

export default UserCard;
