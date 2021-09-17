import React, { useEffect, useRef } from 'react';
import moment from 'moment';

const MessageLeft = ({
  message = null,
  createdAt
}) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    message && messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(scrollToBottom, [message]);

  return (
    <React.Fragment>
      {
        message && (
          <React.Fragment>
            <div className="message-row">
              <div>
                <div className="message-blue">
                  <div><p className="message-content">{message}</p></div>
                  <div className="message-timestamp-right">{createdAt ? moment(createdAt).format('HH:mm') : ''}</div>
                </div>
              </div>
            </div>
            <div ref={messagesEndRef} />
          </React.Fragment>
        )
      }
    </React.Fragment>
  )
};

export default MessageLeft;