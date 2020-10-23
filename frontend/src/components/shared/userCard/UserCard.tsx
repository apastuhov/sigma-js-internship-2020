import React, { MouseEvent } from 'react';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import './userCard.scss';
import { UserPhoto } from '../userPhoto/UserPhoto';
import { MainInfo } from '../../interfaces/Interface';

type MainInfoProps = {
  user: MainInfo;
  boxShadow?: number;
};

export const UserCard: React.FC<MainInfoProps> = props => {
  const sendFriendRequest = (event: MouseEvent) => {
    event.preventDefault();
    console.log('Send user friend request');
  };

  return (
    <Box boxShadow={props.boxShadow && 2} className="user-card">
      <Link to="/" className="leftbar">
        <UserPhoto isOnline={props.user.isOnline} photoUrl={props.user.photoUrl} />
        <h3>
          {props.user.firstName} {props.user.lastName}
        </h3>
        {props.user.age ? <p>{props.user.age} y.o.</p> : null}
        <p>
          <span className="flag"></span>
          {props.user.country}
        </p>
      </Link>
      <div className="rightbar">
        <div className="speaks">
          <h3>Speaks</h3>
          {props.user.speaks.map((speaksInfo, id) => {
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
          {props.user.learn.map((learnInfo, id) => {
            return (
              <div className="languages" key={id}>
                <p>{learnInfo.language}</p>
                <p>{learnInfo.level}</p>
              </div>
            );
          })}
        </div>
        <div className="buttons-action">
          {props.user.isFriend === false ? (
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
