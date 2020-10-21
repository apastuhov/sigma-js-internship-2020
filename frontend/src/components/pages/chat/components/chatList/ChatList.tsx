import axios from 'axios';
import React, { useEffect, useState } from 'react';
import type { ChatInfoProps } from '../chatListItem/ChatListItem';
import { ChatListItem } from '../chatListItem/ChatListItem';
import ChatSearch from '../chatSearch/ChatSearch';
import './chatList.scss';

type ChatProps = {
  picture: {
    large: string;
  };
  name: {
    first: string;
    last: string;
  };
  text: string;
};

export const ChatList: React.FC = () => {
  const [chats, setChats] = useState<Array<string>>([]);
  useEffect(() => {
    getChats();
  }, []);

  const getChats = () => {
    axios.get('https://randomuser.me/api/?results=20').then(response => {
      let newChats = response.data.results.map(
        (result: ChatProps): ChatInfoProps => {
          return {
            photo: result.picture.large,
            name: `${result.name.first} ${result.name.last}`,
            text: 'Hello world! This is a long message that needs to be truncated.'
          };
        }
      );
      setChats([...newChats]);
    });
  };

  return (
    <div className="chat-list">
      <div className="chat-search">
        <ChatSearch />
      </div>
      <div className="chat-list-container">
        {chats.map((chat: any) => (
          <ChatListItem key={chat.name} {...chat} />
        ))}
      </div>
    </div>
  );
};
