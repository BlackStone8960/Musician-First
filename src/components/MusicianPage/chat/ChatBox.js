import React, { useState, useEffect } from 'react';
import TextInput from './TextInput';
import ChatScreen from './ChatScreen';
import ToggleButton from './ToggleButton';
import { connect } from 'react-redux';

const ChatBox = ({ uid, otherId, otherProfile }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [roomId, setRoomId] = useState(null);

  useEffect(() => {
    const orderedIdArr = [uid, otherId].sort((a, b) => (a < b ? -1 : 1))
    setRoomId(`${orderedIdArr[0]}_${orderedIdArr[1]}`);
  }, []);

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
                <ChatScreen
                  uid={uid}
                  otherId={otherId}
                  roomId={roomId}
                />
                <TextInput
                  uid={uid}
                  otherId={otherId}
                  roomId={roomId}
                  className="text-input"
                />
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

const mapStateToProps = (state) => ({
  uid: state.userAccount.id
});

export default connect(mapStateToProps)(ChatBox);