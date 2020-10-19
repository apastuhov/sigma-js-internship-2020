import React, { useMemo } from 'react';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { UserPhoto } from '../../../../shared/userPhoto/UserPhoto';
import './friendsList.scss';

type FriendsProps = {
  friendsList:
  {
    "id": number,
    "firstName": string,
    "lastName": string,
    "photoUrl": string,
    "online": boolean
  }[]
}

const FriendsList: React.FC<FriendsProps> = (props) => {
  const sortedFriends = useMemo(
    () =>
      props.friendsList.sort((friendA, friendB) => {
        return friendA.online === friendB.online ? 0 : friendA.online ? -1 : 1;
      }).slice(0, 6), [props.friendsList]
  );

  return (
    <Box boxShadow={2} className="friends">
      <Link to="/friends" className="title">
        Friends
        <span>({props.friendsList.length})</span>
      </Link>
      <div className="friends-list">
        {sortedFriends.map((friendInfo, id) => {
          return (
            <Link to={`/${friendInfo.id}`} className="friend" key={id}>
              <UserPhoto
                online={friendInfo.online}
                photoUrl={friendInfo.photoUrl}
              />
              <p>{friendInfo.firstName} {friendInfo.lastName}</p>
            </Link>
          )
        })}
      </div>
    </Box >
  );
};

export default FriendsList;