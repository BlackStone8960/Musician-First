import React, { useEffect, useRef } from 'react';
import moment from 'moment';

const MessageRight = ({
  message = 'no message',
  createdAt,
  uid
}) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(scrollToBottom, [message]);

  return (
    <React.Fragment>
      <div className="messageRowRight">
        <div>
          <div className="messageOrange">
            <div><p className="message-content">{message}</p></div>
            <div className="message-timestamp-right">{createdAt ? moment(createdAt).format('HH:mm') : ''}</div>
          </div>
        </div>
      </div>
      <div ref={messagesEndRef} />
    </React.Fragment>
  )
}

export default MessageRight;