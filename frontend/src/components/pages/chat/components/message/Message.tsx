import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import { DTO } from 'dto';
import React from 'react';
import './message.scss';

dayjs.extend(LocalizedFormat);

export const Message: React.FC<DTO.IMessage> = props => {
  const { body, date, isCreatedByCurrentUser } = props;

  const friendlyTimestamp = dayjs(date).format('lll');
  return (
    <div className={['message', `${isCreatedByCurrentUser ? 'mine' : ''}`].join(' ')}>
      <div className="bubble-container">
        <div className="bubble">
          {isCreatedByCurrentUser && (
            <div className="post-actions">
              <EditIcon className="action-icons" />
              <CloseIcon className="action-icons" />
            </div>
          )}
          {body}
          <div className="timestamp">{friendlyTimestamp}</div>
        </div>
      </div>
    </div>
  );
};
