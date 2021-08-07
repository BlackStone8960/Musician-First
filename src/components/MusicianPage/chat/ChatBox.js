import React from 'react';
import TextInput from './TextInput';
import ChatScreen from './ChatScreen';

const ChatBox = ({ otherId }) => {
  return (
    <div className="chat-box">
      <ChatScreen otherId={otherId} />
      <TextInput otherId={otherId} />
    </div>
  )
}
// Fetch uid and order between uid and otherId

export default ChatBox