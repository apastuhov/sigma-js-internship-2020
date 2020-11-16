import Box from '@material-ui/core/Box';
import dayjs from 'dayjs';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { getAllDialogs } from '../../../../../services/apiChatService';
import { getUserFromStorage } from '../../../../../services/sessionStorageService';
import type { DialogInfoProps } from '../chatListItem/ChatListItem';
import { ChatListItem } from '../chatListItem/ChatListItem';
import './chatList.scss';

export const ChatList: React.FC = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<DialogInfoProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.currentTarget?.value);
  };

  useEffect(() => {
    const getChats = async () => {
      setIsLoading(true);
      const user = await getUserFromStorage();
      const dialogs = await getAllDialogs(user._id);
      const newDialogs = dialogs.map(
        (dialog: any): DialogInfoProps => {
          if (user._id !== dialog.participants[1]._id) {
            return {
              dialogId: dialog._id,
              photo: dialog.participants[1].avatar,
              name: `${dialog.participants[1].firstName} ${dialog.participants[1].lastName}`,
              text: dialog.messages[0].body,
              date: dayjs(dialog.messages[0].date).format('DD.MM.YY')
            };
          }
          return {
            dialogId: dialog._id,
            photo: dialog.participants[0].avatar,
            name: `${dialog.participants[0].firstName} ${dialog.participants[0].lastName}`,
            text: dialog.messages[0].body,
            date: dayjs(dialog.messages[0].date).format('DD.MM.YY')
          };
        }
      );
      const results = newDialogs.filter((chat: DialogInfoProps) =>
        chat.name.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResults(results);
      setIsLoading(false);
    };
    getChats();
  }, [search]);

  return (
    <div className="chat-list">
      <Box boxShadow={2} className="chat-search">
        <input type="search" className="search-input" placeholder="Search" value={search} onChange={handleChange} />
      </Box>
      <div className="chat-list-container">
        {isLoading ? (
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          searchResults.map((chat: DialogInfoProps) => <ChatListItem key={chat.name} {...chat} />)
        )}
      </div>
    </div>
  );
};
