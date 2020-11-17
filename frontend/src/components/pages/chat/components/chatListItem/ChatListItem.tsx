import Box from '@material-ui/core/Box';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import shave from 'shave';
import { ParamTypes } from '../../../../interfaces/Interface';
import './chatListItem.scss';

export type DialogInfoProps = {
  dialogId: string;
  photo?: string;
  name: string;
  text: string;
  date: string;
};

export const ChatListItem: React.FC<DialogInfoProps> = ({ dialogId, photo, name, text, date }) => {
  const { currentDialogId } = useParams<ParamTypes>();

  useEffect(() => {
    shave('.chat-snippet', 30);
  }, []);

  return (
    <Link to={`/chat/${dialogId}`} className="chat-item-link">
      <Box boxShadow={2} className={dialogId === currentDialogId ? 'chat-list-item-selected' : 'chat-list-item'}>
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
