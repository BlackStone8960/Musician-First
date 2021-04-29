import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'
import database, { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import { startSetAccounts } from './actions/accounts';

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
// signupボタン？を押した時用のフローを作る？
ReactDOM.render(<LoadingPage />, document.getElementById('app'));
// startsetAccount はページ遷移のたびに毎回とってくるようにする
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    // uidがfirebase上に登録されているかどうかを検索し、なければsignupページに飛ばす
    store.dispatch(startSetAccounts()).then(() => {      
      renderApp();
      const hasSignedUp = store.getState().accounts.some((account) => account.id === user.uid);
      hasSignedUp ? history.push('/top') : history.push('/signup')
    });
    // Make a log in page?
    // if (history.location.pathname === '/') {
    //   history.push('/dashboard');
    // }
  } else {
    store.dispatch(logout());
    store.dispatch(startSetAccounts()).then(() => {
      renderApp();
      history.push('/');
    });
  }
});