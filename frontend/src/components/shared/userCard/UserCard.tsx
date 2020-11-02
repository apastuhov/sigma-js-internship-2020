import Box from '@material-ui/core/Box';
import React, { MouseEvent, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { getUserFromStorage } from '../../../services/localStorageService';
import { IUser } from '../../interfaces/Interface';
import { UserPhoto } from '../userPhoto/UserPhoto';
import './userCard.scss';

type MainInfoProps = {
  mainInfo: IUser;
  boxShadow?: number;
};
const UserCard: React.FC<MainInfoProps> = ({ mainInfo }, shadowIntensity) => {
  const [loginedUser, setLoginedUser] = useState(getUserFromStorage());

  const sendFriendRequest = (event: MouseEvent) => {
    event.preventDefault();
    const request = {
      friendId: mainInfo.id,
      myId: 111
    };
    console.log(JSON.stringify(request));
  };

  return (
    <>
      {/* TIME DECISION */}
      {!loginedUser ? (
        <Redirect to="/login" />
      ) : (
        <Box boxShadow={shadowIntensity.boxShadow && 2} className="user-card">
          <Link to="/" className="leftbar">
            <UserPhoto isOnline={mainInfo.isOnline} photoUrl={mainInfo.photoUrl} />
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
            {loginedUser.id !== mainInfo.id && (
              <div className="buttons-action">
                {mainInfo.isFriend && (
                  <Link to="/" onClick={sendFriendRequest} className="add-friend">
                    add friend
                  </Link>
                )}
                <Link to="/chat" className="send-message">
                  message
                </Link>
              </div>
            )}
          </div>
        </Box>
      )}
    </>
  );
};

export default UserCard;
