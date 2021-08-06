import React from 'react';
import TextInput from './TextInput';
import ChatScreen from './ChatScreen';

const ChatBox = ({ otherId, otherProfile }) => {
  return (
    <div className="chat-box">
      <ChatScreen otherId={otherId} otherProfile={otherProfile} />
      <TextInput otherId={otherId} />
    </div>
  )
}

export default ChatBox