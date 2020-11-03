import React, { MouseEvent, useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { Link, Redirect } from 'react-router-dom';
import { getUserFromStorage } from '../../../services/localStorageService';
import { IUser } from '../../interfaces/Interface';
import { UserPhoto } from '../userPhoto/UserPhoto';
import dayjs from 'dayjs';
import './userCard.scss';

type MainInfoProps = {
  mainInfo: IUser;
  boxShadow?: number;
};
const UserCard: React.FC<MainInfoProps> = ({ mainInfo }, shadowIntensity) => {
  const [loginedUser, setLoginedUser] = useState(getUserFromStorage());
  const [userAge, setUserAge] = useState<number>();

  const sendFriendRequest = (event: MouseEvent) => {
    event.preventDefault();
    const request = {
      friendId: mainInfo.id,
      myId: 111
    };
    console.log(JSON.stringify(request));
  };

  useEffect(() => {
    const date = dayjs(new Date());
    const age = date.diff(mainInfo.birthday, 'year');
    setUserAge(age);
  }, [mainInfo.birthday]);

  return (
    <>
      {/* TIME DECISION */}
      {!loginedUser ? (
        <Redirect to="/login" />
      ) : (
          <Box boxShadow={shadowIntensity.boxShadow && 2} className="user-card">
            <Link to="/" className="leftbar">
              <UserPhoto avatar={mainInfo.avatar} />
              <h3>
                {mainInfo.firstName} {mainInfo.lastName}
              </h3>
              <p>{userAge} y.o.</p>
              <div className="flag">
                <img src={`https://www.countryflags.io/${mainInfo.countryCode}/flat/24.png`} alt="Country flag" />
                <p>{mainInfo.country}</p>
              </div>
            </Link>
            <div className="rightbar">
              <div className="speaks">
                <h3>Speaks</h3>
                {mainInfo.speak.map((speaksInfo, id) => {
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
              {!loginedUser.id &&
                <div className="buttons-action">
                  {!mainInfo.isFriend && <Link to="/" onClick={sendFriendRequest} className="add-friend">add friend</Link>}
                  <Link to="/chat" className="send-message">message</Link>
                </div>
              }
            </div>
          </Box>
        )}
    </>
  );
};

export default UserCard;
