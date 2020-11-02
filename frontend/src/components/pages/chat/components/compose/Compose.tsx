import SendSharpIcon from '@material-ui/icons/SendSharp';
import React from 'react';
import './compose.scss';

export const Compose: React.FC = () => {
  return (
    <form action="">
      <input type="text" className="compose-input" placeholder="Write a message..." />
      <div className="save-icon">
        <button type="submit">
          <SendSharpIcon className="send-icon" type="submit" />
        </button>
      </div>
    </form>
  );
};
