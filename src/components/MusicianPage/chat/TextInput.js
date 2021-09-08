import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import database from '../../../firebase/firebase';
import moment from 'moment';
import { connect } from 'react-redux';

const TextInput = ({ uid, otherId }) => {
  const [message, setMessage] = useState('');
  // Enter 押したときの処理も入れる

  const sendMessageData = () => {
    if (message === "") return;
    console.log('sendMessageData start');
    const timeStamp = moment();
    const messageData = {
      uid,
      message,
      createdAt: timeStamp.format('YYYY-MM-DD HH:mm:ss')
    }
    const orderedIdArr = [uid, otherId].sort((a, b) => (a < b ? -1 : 1));

    database.ref(`messages/${orderedIdArr[0]}_${orderedIdArr[1]}/${timeStamp.format('YYYYMMDDHHmmss')}_${uid}`)
      .set(messageData)
      .then(() => {
        console.log('success');
        setMessage('');
      })
      .catch(err => {
        console.error(err);
      })
  }

  return (
    <div className="chat-input">
      <form noValidate autoComplete="off" className="input-form">
        <TextField
          id="standard-text"
          label="Input Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={sendMessageData}>
          <SendIcon />
        </Button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  uid: state.userAccount.id
})

export default connect(mapStateToProps)(TextInput)
