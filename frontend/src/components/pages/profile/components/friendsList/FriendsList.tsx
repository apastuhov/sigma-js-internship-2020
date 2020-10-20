import React, { useMemo } from 'react';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { UserPhoto } from '../../../../shared/userPhoto/UserPhoto';
import './friendsList.scss';
import { ListOfFriends } from '../../../../interfaces/Interface';

const FriendsList: React.FC<ListOfFriends> = ({ friends }) => {
  const sortedFriends = useMemo(() => {
    let online = friends.filter(user => user.isOnline === true);
    let offline = friends.filter(user => user.isOnline === false);
    if (online.length <= 6) {
      let needToAdd = 6 - online.length;
      let addUsers = offline.slice(0, needToAdd);
      let usersToShow = online.concat(addUsers);
      return usersToShow;
    } else {
      return online.slice(0, 6);
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
            <Link to={`/${friendInfo.id}`} className="friend" key={id}>
              <UserPhoto photoInfo={friendInfo} />
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
