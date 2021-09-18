const userAccountReducerDefaultState = {};

export default (state = userAccountReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_USER_ACCOUNT":
      return {
        ...action.account,
      };
    case "EDIT_USER_ACCOUNT":
      return {
        id: state.id,
        profile: {
          ...state.profile,
          ...action.updates.profile,
        },
      };
    case "DELETE_USER_ACCOUNT":
      return {};
    default:
      return state;
  }
};
