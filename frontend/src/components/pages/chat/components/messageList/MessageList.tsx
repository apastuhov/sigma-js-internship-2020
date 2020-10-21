import Box from '@material-ui/core/Box';
import moment from 'moment';
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
    var tempMessages = [
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
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      let previous = messages[i - 1];
      let current = messages[i];
      let next = messages[i + 1];
      let isMine = current.author === MY_USER_ID;
      let currentMoment = moment(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.author === current.author;

        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      tempMessages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />
      );

      // Proceed to the next message.
      i += 1;
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
