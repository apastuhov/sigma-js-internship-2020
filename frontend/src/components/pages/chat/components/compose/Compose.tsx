import SendSharpIcon from '@material-ui/icons/SendSharp';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createMessage } from '../../../../../services/apiChatService';
import { getUserFromStorage } from '../../../../../services/sessionStorageService';
import './compose.scss';

export const Compose: React.FC = () => {
  const [messageValue, setMessageValue] = useState<string>('');
  const [loginedUser] = useState(getUserFromStorage());
  const { dialogId } = useParams<any>();

  const inputValueHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessageValue(event.target.value);
  };

  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault();
    const request = {
      userId: loginedUser._id,
      body: messageValue,
      status: 0
    };
    createMessage(dialogId, request);
    setMessageValue('');
  };
  return (
    <form action="" onSubmit={sendMessage}>
      <input
        type="text"
        className="compose-input"
        placeholder="Write a message..."
        required
        value={messageValue}
        onChange={inputValueHandleChange}
      />
      <div className="save-icon">
        <button type="submit">
          <SendSharpIcon className="send-icon" type="submit" />
        </button>
      </div>
    </form>
  );
};
