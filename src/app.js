import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import { startSetAccounts } from './actions/otherAccounts';

// creating store
const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    // store.dispatch(login(user.uid));
    store.dispatch(login({
      uid: user.uid,
      email: user.email,
      providerId: user.providerData[0].providerId
    }));
    store.dispatch(startSetAccounts()).then((hasSignedUp) => {      
      renderApp();
      if (hasSignedUp) {
        history.location.pathname === '/' && history.push('/filter1'); // Push user to filter page after sign up
      } else { // When user visit at first and signup account
        history.push('/signup');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});