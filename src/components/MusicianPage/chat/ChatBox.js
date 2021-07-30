import React from 'react';
import TextInput from './TextInput';
import ChatScreen from './ChatScreen';

const ChatBox = ({ otherId }) => {
  return (
    <div className="chat-box">
      <ChatScreen />
      <TextInput otherId={otherId} />
    </div>
  )
}

export default ChatBox