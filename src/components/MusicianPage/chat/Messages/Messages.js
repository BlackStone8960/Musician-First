import React from 'react';
import Contacts from './Contacts';
import TextInput from '../TextInput';
import ChatScreen from '../ChatScreen';

const Messages = () => {
  const userAccount = useSelector(state => state.userAccount);

  return (
    <div className="massages-container">
      <Contacts />
      <div className="chat-box">
        <ChatScreen otherId={otherId} />
        <TextInput otherId={otherId} className="text-input" />
      </div >
    </div>
  )
}

export default Messages
