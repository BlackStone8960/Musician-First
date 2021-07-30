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
    database.ref(`messages/${uid}_${otherId}/${timeStamp.format('YYYYMMDDHHmmss')}_${uid}`)
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
    <React.Fragment>
      <form noValidate autoComplete="off">
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
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  uid: state.userAccount.id
})

export default connect(mapStateToProps)(TextInput)
