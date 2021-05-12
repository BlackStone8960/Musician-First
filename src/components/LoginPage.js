import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { firebase, uiConfig } from '../firebase/firebase';

const LogInPage = () => (
  <section className="main">
    <div className="main__wrapper">
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  </section>
);

export { LogInPage as default }