const accountsReducerDefaultState = [];

export default (state = accountsReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_ACCOUNTS":
      return action.accounts;
    case "CREATE_ACCOUNT" :
      return [
        ...state,
        action.account
      ];
    case "EDIT_ACCOUNT":
      return state.map((account) => {
        if (account.id === action.id) {
          return {
            ...account,
            ...action.updates
          }
        } else {
          return account;
        }
      })
    default:
      return state;
  }
}