import React, { useMemo } from 'react';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { IFriendsListProps } from '../../../../interfaces/Interface';
import { UserPhoto } from '../../../../shared/userPhoto/UserPhoto';
import './friendsList.scss';

const FriendsList: React.FC<IFriendsListProps> = ({ id, friends }) => {
  // const sortedFriends = useMemo(() => {
  //   return friends.slice(0, maxOnlineUsers);
  //   //TODO Sort online friends
  //   // const online = friends.filter(user => user.isOnline);
  //   // const offline = friends.filter(user => !user.isOnline);
  //   // if (online.length < maxOnlineUsers) {
  //   //   return [...online, ...offline].slice(0, maxOnlineUsers);
  //   // } else {
  //   //   return online.slice(0, maxOnlineUsers);
  //   // }
  // }, [friends]);
  return (
    <Box boxShadow={2} className="friends">
      <Link to={`/user/${id}/friends`} className="title">
        Friends
        <span>({friends.length})</span>
      </Link>
      <div className="friends-list">
        {friends.map((friendInfo, id) => {
          return (
            <Link to={`/user/${friendInfo._id}`} className="friend" key={id}>
              <UserPhoto avatar={friendInfo.avatar} />
              <p>
                {friendInfo.firstName} {friendInfo.lastName}
              </p>
            </Link>
          );
        })}
      </div>
    </Box>
  );
};

export default FriendsList;
