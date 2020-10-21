import moment from 'moment';
import React from 'react';
import './message.scss';

type MessageProps = {
  data: {
    timestamp: Date;
    message: string;
  };
  isMine: boolean;
  startsSequence: boolean;
  endsSequence: boolean;
  showTimestamp: boolean;
};

export const Message: React.FC<MessageProps> = props => {
  const { data, isMine, startsSequence, endsSequence, showTimestamp } = props;

  const friendlyTimestamp = moment(data.timestamp).format('LLLL');
  return (
    <div
      className={[
        'message',
        `${isMine ? 'mine' : ''}`,
        `${startsSequence ? 'start' : ''}`,
        `${endsSequence ? 'end' : ''}`
      ].join(' ')}
    >
      {showTimestamp && <div className="timestamp">{friendlyTimestamp}</div>}

      <div className="bubble-container">
        <div className="bubble" title={friendlyTimestamp}>
          {data.message}
        </div>
      </div>
    </div>
  );
};
