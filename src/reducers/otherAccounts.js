const accountsReducerDefaultState = [];

export default (state = accountsReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_OTHER_ACCOUNTS":
      return action.otherAccounts;
    case "FILTER_OTHER_ACCOUNT":
      return action.others.map((user) => {
        if (
          user.profile.firstName.includes(action.inputName) ||
          user.profile.lastName.includes(action.inputName)
        ) {
          return {
            ...user,
            isFiltered: true,
          };
        }
        return user;
      });
    default:
      return state;
  }
};
