import React, { MouseEvent } from 'react';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import UserPhoto from '../../util/user.png';
import './userCard.scss';
import User from '../../util/user.json';

export const UserCard: React.FC = () => {
  let { firstName, lastName, age, country, speaks, learn, online, isFriend } = User;

  const sendFriendRequest = (event: MouseEvent) => {
    event.preventDefault();
  };

  return (
    <Box boxShadow={2} className="user-card">
      <div className="leftbar">
        <img src={UserPhoto} alt="" />
        {online === true ? <span className="online-status"></span> : null}
        <h3>
          {firstName} {lastName}
        </h3>
        <p>{age} y.o.</p>
        <p>
          <span></span>
          {country}
        </p>
      </div>
      <div className="rightbar">
        <div className="speaks">
          <h3>Speaks</h3>
          {speaks.map((speaksInfo, id) => {
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
          {learn.map((learnInfo, id) => {
            return (
              <div className="languages" key={id}>
                <p>{learnInfo.language}</p>
                <p>{learnInfo.level}</p>
              </div>
            );
          })}
        </div>
        <div className="buttons-action">
          {isFriend === false ? (
            <Link to="/" onClick={sendFriendRequest} className="add-friend">
              add friend{' '}
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
