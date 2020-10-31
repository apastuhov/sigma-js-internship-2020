import React, { useMemo } from 'react';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { maxOnlineUsers } from '../../../../constants/constants';
import { IFriendsListProps } from '../../../../interfaces/Interface';
import { UserPhoto } from '../../../../shared/userPhoto/UserPhoto';
import './friendsList.scss';

const FriendsList: React.FC<IFriendsListProps> = ({ friends }) => {
  const sortedFriends = useMemo(() => {
    const online = friends.filter(user => user.isOnline);
    const offline = friends.filter(user => !user.isOnline);
    if (online.length < maxOnlineUsers) {
      return [...online, ...offline].slice(0, maxOnlineUsers);
    } else {
      return online.slice(0, maxOnlineUsers);
    }
  }, [friends]);

  return (
    <Box boxShadow={2} className="friends">
      <Link to="/friends" className="title">
        Friends
        <span>({friends.length})</span>
      </Link>
      <div className="friends-list">
        {sortedFriends.map((friendInfo, id) => {
          return (
            <Link to={`/user/${friendInfo.id}`} className="friend" key={id}>
              <UserPhoto isOnline={friendInfo.isOnline} photoUrl={friendInfo.photoUrl} />
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
