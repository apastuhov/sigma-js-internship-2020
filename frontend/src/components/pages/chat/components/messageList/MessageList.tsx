import Box from '@material-ui/core/Box';
import React, { useEffect, useRef, useState } from 'react';
import { Compose } from '../compose/Compose';
import { Message } from '../message/Message';
import './messageList.scss';

const MY_USER_ID = 'apple';

export const MessageList: React.FC = () => {
  const [messages] = useState<Array<any>>([]);
  // const { dialogId } = useParams<any>();

  // useEffect(() => {
  //   setMessages([]);
  //   (async () => {
  //     const messages = await getChatMessages(dialogId);
  //     setMessages(messages);
  //   })();
  // }, [dialogId]);

  //TODO: second useEffect for user data

  // third useEffect for sockets for new messages

  //scroll to bottom on each render
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef.current!.scrollIntoView();
  });

  const renderMessages = () =>
    messages.map(message => <Message key={message.id} isMine={message.author === MY_USER_ID} data={message} />);

  return (
    <Box boxShadow={2} className="message-list">
      <div className="user-data">
        <h2>George Burner</h2>
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
  );
};
