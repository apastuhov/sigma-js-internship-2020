import Box from '@material-ui/core/Box';
import React, { useEffect } from 'react';
import shave from 'shave';
import './chatListItem.scss';

type ChatInfoProps = {
  photo: string;
  name: string;
  text: string;
};

export const ChatListItem: React.FC<ChatInfoProps> = props => {
  useEffect(() => {
    shave('.chat-snippet', 20);
  });

  const { photo, name, text } = props;

  return (
    <Box boxShadow={2} className="chat-list-item">
      <img className="chat-photo" src={photo} alt="chat" />
      <div className="chat-info">
        <h1 className="chat-title">{name}</h1>
        <p className="chat-snippet">{text}</p>
      </div>
    </Box>
  );
};
