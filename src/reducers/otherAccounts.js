const accountsReducerDefaultState = [];

export default (state = accountsReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_OTHER_ACCOUNTS":
      return action.otherAccounts;
    default:
      return state;
  }
}