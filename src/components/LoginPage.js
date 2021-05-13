import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { firebase, uiConfig } from '../firebase/firebase';

const LoginPage = () => (
  <section className="main">
    <div className="main__wrapper">
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  </section>
);

export { LoginPage as default }