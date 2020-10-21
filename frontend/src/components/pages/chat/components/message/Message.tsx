import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import React from 'react';
import './message.scss';

dayjs.extend(LocalizedFormat);

type MessageProps = {
  data: {
    timestamp: Date;
    message: string;
  };
  isMine: boolean;
};

export const Message: React.FC<MessageProps> = props => {
  const { data, isMine } = props;

  const friendlyTimestamp = dayjs(data.timestamp).format('lll');
  return (
    <div className={['message', `${isMine ? 'mine' : ''}`].join(' ')}>
      <div className="bubble-container">
        <div className="bubble">
          {data.message}
          <div className="timestamp">{friendlyTimestamp}</div>
        </div>
      </div>
    </div>
  );
};
