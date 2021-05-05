import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import accountsReducer from '../reducers/accounts';
import userAccountReducer from '../reducers/_userAccount';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      // userAccount: userAccountReducer,
      accounts: accountsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

