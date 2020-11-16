import Box from '@material-ui/core/Box';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import shave from 'shave';
import './chatListItem.scss';

export type DialogInfoProps = {
  dialogId: string;
  photo: string;
  name: string;
  text: string;
  date: string;
};

export const ChatListItem: React.FC<DialogInfoProps> = ({ dialogId, photo, name, text, date }) => {
  const [currentDialogId, setCurrentDialogId] = useState('');
  const [isActive, setIsActive] = useState<boolean>(false);
  // id = id current set is active true
  const toggleChat = () => {
    if (currentDialogId === dialogId) {
      setIsActive(true);
    }
  };
  const tileClass = isActive ? 'chat-list-item-selected' : 'chat-list-item';

  useEffect(() => {
    setCurrentDialogId(dialogId);
    shave('.chat-snippet', 30);
  }, [dialogId]);

  return (
    <Link to={`/chat/${dialogId}`} className="chat-item-link">
      <Box boxShadow={2} className={tileClass} onClick={toggleChat}>
        <img className="chat-photo" src={photo} alt="chat" />
        <div className="chat-info">
          <h1 className="chat-title">{name}</h1>
          <p className="chat-last-message-date">{date}</p>
          <p className="chat-snippet">{text}</p>
        </div>
      </Box>
    </Link>
  );
};
