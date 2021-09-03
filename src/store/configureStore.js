import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";
import otherAccountsReducer from "../reducers/otherAccounts";
import userAccountReducer from "../reducers/userAccount";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer, // The information about authentication
      userAccount: userAccountReducer, // The information of logged in user
      otherAccounts: otherAccountsReducer, // The information of other users except logged in user
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
