const accountsReducerDefaultState = [];

export default (state = accountsReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_OTHER_ACCOUNTS":
      return action.otherAccounts;
    case "FILTER_OTHER_ACCOUNT":
      return action.others.map((user) => {
        if (
          user.profile.firstName
            .toLowerCase()
            .includes(action.inputName.toLowerCase()) ||
          user.profile.lastName
            .toLowerCase()
            .includes(action.inputName.toLowerCase())
        ) {
          return {
            ...user,
            isFiltered: true,
          };
        }
        return { ...user, isFiltered: false };
      });
    case "INITIALIZE_FILTERED_ACCOUNT":
      return action.others.map((user) => {
        return {
          ...user,
          isFiltered: false,
        };
      });
    default:
      return state;
  }
};
