import Box from '@material-ui/core/Box';
import dayjs from 'dayjs';
import { DTO } from 'dto';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { getAllDialogs } from '../../../../../services/apiChatService';
import { getUserFromStorage } from '../../../../../services/sessionStorageService';
import type { DialogInfoProps } from '../chatListItem/ChatListItem';
import { ChatListItem } from '../chatListItem/ChatListItem';
import { updateDialog } from '../../../../../socket/dialogSocket';
import { IMessage } from '../../../../interfaces/Interface';
import './chatList.scss';

export const ChatList: React.FC = () => {
  const [search, setSearch] = useState('');
  const [dialogList, setDialogList] = useState<DialogInfoProps[]>([]);
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
        (dialog: DTO.IDialogs): DialogInfoProps => {
          const { avatar, firstName, lastName } = dialog.participants.find(({ _id }) => _id !== user._id) || {};
          return {
            dialogId: dialog._id,
            photo: avatar,
            name: `${firstName} ${lastName}`,
            text: dialog.messages[0]?.body,
            date: dayjs(dialog.messages[0]?.date).format(`DD.MM HH:mm`)
          };
        }
      );
      setDialogList(newDialogs);
      setSearchResults(newDialogs);
      setIsLoading(false);
    };
    getChats();
  }, []);

  useEffect(() => {
    const results = dialogList.filter((chat: DialogInfoProps) =>
      chat.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(results);
  }, [search, dialogList]);

  useEffect(() => {
    updateDialog((message: IMessage, dialogID: string) => {
      const newDialogs = dialogList.map(dialog => dialog.dialogId === dialogID ? { ...dialog, text: message.body ,date: dayjs(message.date).format('DD.MM HH:mm') } : dialog);
      newDialogs.sort((a,b) => b.date.localeCompare(a.date));
      setDialogList(newDialogs);
    });
  }, [dialogList]);

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
