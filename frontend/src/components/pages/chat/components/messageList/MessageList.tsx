import Box from '@material-ui/core/Box';
import { DTO } from 'dto';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getChatMessages } from '../../../../../services/apiChatService';
import { getUserDetails } from '../../../../../services/apiUserService';
import { getUserFromStorage } from '../../../../../services/sessionStorageService';
import { Compose } from '../compose/Compose';
import { Message } from '../message/Message';
import './messageList.scss';

export const MessageList: React.FC = () => {
  const [messages, setMessages] = useState<Array<DTO.IMessage>>([]);
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const { dialogId } = useParams<any>();
  const chatUserId = getUserFromStorage()._id;

  useEffect(() => {
    setMessages([]);
    (async () => {
      const messages = await getChatMessages(dialogId);
      setMessages(messages.messages);
      if (chatUserId !== messages.participants[1]) {
        setUserId(messages.participants[1]);
      } else {
        setUserId(messages.participants[0]);
      }
    })();
  }, [dialogId, chatUserId]);

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
    if (dialogId) {
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
      {dialogId ? (
        <Box boxShadow={2} className="message-list">
          <div className="user-data">
            <h2>{userName}</h2>
            <p>Last seen 2 hours ago</p>
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
