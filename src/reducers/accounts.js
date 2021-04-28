const accountsReducerDefaultState = [];

export default (state = accountsReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_ACCOUNTS":
      return action.accounts;
    case "CREATE_ACCOUNT" :
      return [
        ...state,
        action.account
      ]
    default:
      return state;
  }
}