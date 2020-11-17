import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import { IMessage } from '../../../../interfaces/Interface';
import React from 'react';
import './message.scss';

dayjs.extend(LocalizedFormat);

export const Message: React.FC<IMessage> = props => {
  const { body, date, isCreatedByCurrentUser } = props;

  const friendlyTimestamp = dayjs(date).format('lll');
  return (
    <div className={['message', `${isCreatedByCurrentUser ? 'mine' : ''}`].join(' ')}>
      <div className="bubble-container">
        <div className="bubble">
          {body}
          <div className="timestamp">{friendlyTimestamp}</div>
        </div>
      </div>
    </div>
  );
};
