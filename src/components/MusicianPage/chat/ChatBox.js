import React, { useState } from 'react';
import TextInput from './TextInput';
import ChatScreen from './ChatScreen';
import ToggleButton from './ToggleButton';

const ChatBox = ({ otherId, otherProfile }) => {
  const [isHidden, setIsHidden] = useState(true);

  const isClicked = () => {
    setIsHidden(prevState => !prevState)
  }

  return (
    <React.Fragment>
      {
        isHidden ? (
          <div className="chat-box-hidden">
            <div className="relative">
              <div className="chat-box-hidden__text">{`Tell ${otherProfile.firstName} about your music project…`}</div>
              <ToggleButton isHidden={isHidden} isClicked={isClicked} />
            </div>
          </div>
        ) : (
          <div className="chat-box-wrapper">
            <div className="relative">
              <div className="chat-box">
                <ChatScreen otherId={otherId} />
                <TextInput otherId={otherId} className="text-input" />
              </div >
              <ToggleButton isHidden={isHidden} isClicked={isClicked} />
            </div>
          </div >
        )
      }
    </React.Fragment>
  )
}
// Fetch uid and order between uid and otherId

export default ChatBox