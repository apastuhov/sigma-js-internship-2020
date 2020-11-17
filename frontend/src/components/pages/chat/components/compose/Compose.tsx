import SendSharpIcon from '@material-ui/icons/SendSharp';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { sendSocketMessage } from '../../../../../socket/dialogSocket';
import { getUserFromStorage } from '../../../../../services/sessionStorageService';
import { ParamTypes } from '../../../../interfaces/Interface';
import './compose.scss';

export const Compose: React.FC = () => {
  const [messageValue, setMessageValue] = useState<string>('');
  const [loginedUser] = useState(getUserFromStorage());
  const { currentDialogId } = useParams<ParamTypes>();

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
    sendSocketMessage(request, currentDialogId);
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
