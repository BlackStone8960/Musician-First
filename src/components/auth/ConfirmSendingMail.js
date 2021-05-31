import React from 'react';
import { connect } from 'react-redux';
import { firebase } from '../../firebase/firebase';

const url = "https://www.musicianfirst.ca"

export const ConfirmSendingMail = ({ email, history }) => {
  const onChangePassword = () => {
    const actionCodeSettings = { url };
    firebase.auth().sendPasswordResetEmail(email, actionCodeSettings)
    .then(() => {
      console.log('Email has been sent!');
      history.push("/sentmail");
    })
    .catch((err) => {
      console.error(`Error occured : ${err}`);
    })
  }

  return (
    <div className="center-text">
      <p>We will send email to <b>{email}.</b></p>
      <button onClick={onChangePassword} className="button--config">Send Mail</button>
    </div>
  )
};

const mapStateToProps = (state) => ({
  email: state.userAccount.profile.email
})

export default connect(mapStateToProps)(ConfirmSendingMail);