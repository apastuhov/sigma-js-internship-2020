import Box from '@material-ui/core/Box';
import React, { useEffect, useState } from 'react';
import shave from 'shave';
import './chatListItem.scss';

export type ChatInfoProps = {
  photo: string;
  name: string;
  text: string;
  date: string;
};

export const ChatListItem: React.FC<ChatInfoProps> = ({ photo, name, text, date }) => {
  useEffect(() => {
    shave('.chat-snippet', 30);
  });

  //on click set id link to router
  const [isActive, setIsActive] = useState<boolean>(false);
  // id = id current set is active true
  const toggleChat = () => setIsActive(!isActive);
  const tileClass = isActive ? 'chat-list-item-selected' : 'chat-list-item';

  return (
    <Box boxShadow={2} className={tileClass} onClick={toggleChat}>
      <img className="chat-photo" src={photo} alt="chat" />
      <div className="chat-info">
        <h1 className="chat-title">{name}</h1>
        <p className="chat-last-message-date">{date}</p>
        <p className="chat-snippet">{text}</p>
      </div>
    </Box>
  );
};
