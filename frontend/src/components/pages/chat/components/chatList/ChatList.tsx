import Box from '@material-ui/core/Box';
import axios from 'axios';
import dayjs from 'dayjs';
import React, { ChangeEvent, useEffect, useState } from 'react';
import type { ChatInfoProps } from '../chatListItem/ChatListItem';
import { ChatListItem } from '../chatListItem/ChatListItem';
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
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<ChatInfoProps[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.currentTarget?.value);
  };

  useEffect(() => {
    getChats();
  }, [search]);

  const getChats = () => {
    axios.get('https://randomuser.me/api/?results=20').then(response => {
      let newChats = response.data.results.map(
        (result: ChatProps): ChatInfoProps => {
          return {
            photo: result.picture.large,
            name: `${result.name.first} ${result.name.last}`,
            text: 'Hello world! This is a long message that needs to be truncated.',
            date: dayjs(new Date().getTime()).format('DD.MM')
          };
        }
      );
      const results = newChats.filter((chat: ChatInfoProps) => chat.name.toLowerCase().includes(search));
      setSearchResults(results);
    });
  };

  return (
    <div className="chat-list">
      <Box boxShadow={2} className="chat-search">
        <input type="search" className="search-input" placeholder="Search" value={search} onChange={handleChange} />
      </Box>
      <div className="chat-list-container">
        {searchResults.map((chat: ChatInfoProps) => (
          <ChatListItem key={chat.name} {...chat} />
        ))}
      </div>
    </div>
  );
};
