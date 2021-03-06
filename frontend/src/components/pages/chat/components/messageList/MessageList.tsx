import Box from '@material-ui/core/Box';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getChatMessages } from '../../../../../services/apiChatService';
import { getUserDetails } from '../../../../../services/apiUserService';
import { getUserFromStorage } from '../../../../../services/sessionStorageService';
import { getMessage, joinDialog, leaveRoom } from '../../../../../socket/dialogSocket';
import { IMessage, ParamTypes } from '../../../../interfaces/Interface';
import { Compose } from '../compose/Compose';
import { Message } from '../message/Message';
import './messageList.scss';

export const MessageList: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const { currentDialogId } = useParams<ParamTypes>();
  const chatUser = getUserFromStorage();
  const location = useLocation();

  useEffect(() => {
    const dialogPath = location.pathname.split('/');
    if (dialogPath[dialogPath.length - 1] !== 'dialogs') {
      setMessages([]);
      (async () => {
        const messages = await getChatMessages(currentDialogId);
        setMessages(messages.messages);
        const chatPaticipant = messages.participants.find((id: string) => id !== chatUser._id);
        setUserId(chatPaticipant);
      })();
    }
  }, [location, currentDialogId, chatUser._id]);

  useEffect(() => {
    joinDialog(currentDialogId);
    return () => {
      leaveRoom(currentDialogId);
    };
  }, [currentDialogId]);

  useEffect(() => {
    getMessage((message: IMessage) => {
      setMessages(oldMessages => [...oldMessages, message]);
    });
  }, []);

  useEffect(() => {
    (async () => {
      const userData = await getUserDetails(userId);
      setUserName(`${userData.firstName} ${userData.lastName}`);
    })();
  }, [userId]);

  // TODO: useEffect for sockets for new messages

  //scroll to bottom on each render
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentDialogId) {
      divRef.current!.scrollIntoView();
    }
  });

  const renderMessages = () => {
    const user = getUserFromStorage();
    const CURRENT_USER_ID = user._id;
    return messages.map(message => (
      <Message
        key={message._id}
        _id={message._id}
        isCreatedByCurrentUser={message.userId === CURRENT_USER_ID}
        body={message.body}
        date={message.date}
        userId={message.userId}
        status={message.status}
      />
    ));
  };

  return (
    <>
      {currentDialogId ? (
        <Box boxShadow={2} className="message-list">
          <div className="user-data">
            <h2>{userName}</h2>
          </div>
          <hr />
          <div className="message-list-container">
            {renderMessages()}
            <div ref={divRef} />
          </div>
          <hr />
          <Compose />
        </Box>
      ) : (
          <p className="messageListReplace">Please select a chat to start messaging</p>
        )}
    </>
  );
};
