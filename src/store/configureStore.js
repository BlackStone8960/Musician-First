import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import otherAccountsReducer from '../reducers/otherAccounts';
import userAccountReducer from '../reducers/userAccount';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      userAccount: userAccountReducer,
      otherAccounts: otherAccountsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

