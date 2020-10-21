import { Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Compose } from '../compose/Compose';
import { Message } from '../message/Message';
import './messageList.scss';

const MY_USER_ID = 'apple';

export const MessageList: React.FC = () => {
  const [messages, setMessages] = useState<Array<any>>([]);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = () => {
    const tempMessages = [
      {
        id: 1,
        author: 'apple',
        message:
          'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
      },
      {
        id: 2,
        author: 'orange',
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
      },
      {
        id: 3,
        author: 'orange',
        message:
          'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
      },
      {
        id: 4,
        author: 'apple',
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
      },
      {
        id: 5,
        author: 'apple',
        message:
          'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
      },
      {
        id: 6,
        author: 'apple',
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
      },
      {
        id: 7,
        author: 'orange',
        message:
          'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
      },
      {
        id: 8,
        author: 'orange',
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
      },
      {
        id: 9,
        author: 'apple',
        message:
          'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
      },
      {
        id: 10,
        author: 'orange',
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
      }
    ];
    setMessages([...messages, ...tempMessages]);
  };

  const renderMessages = () => {
    let tempMessages = [];

    for (let i = 0; i < messages.length; i++) {
      let isMine = messages[i].author === MY_USER_ID;
      tempMessages.push(<Message key={i} isMine={isMine} data={messages[i]} />);
    }
    return tempMessages;
  };

  return (
    <Box boxShadow={2} className="message-list">
      <div className="user-data">
        <h2>George Burner</h2>
        <p>Last seen 2 hours ago</p>
      </div>
      <hr />
      <div className="message-list-container">{renderMessages()}</div>
      <hr />
      <Compose />
    </Box>
  );
};
