import React, { useRef } from 'react';
import moment from 'moment';

const MessageLeft = ({
  message = 'no message',
  createdAt
}) => (
  <div className="messageRow">
    <div>
      <div className="messageBlue">
        <div><p className="message-content">{message}</p></div>
        <div className="message-timestamp-right">{createdAt ? moment(createdAt).format('HH:mm') : ''}</div>
      </div>
    </div>
  </div>
)

export default MessageLeft;