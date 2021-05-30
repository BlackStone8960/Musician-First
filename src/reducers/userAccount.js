const userAccountReducerDefaultState = {};

export default (state = userAccountReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_ACCOUNT" :
      return {
        ...action.account
      };
    case "EDIT_ACCOUNT":
      return {
        id: state.id,
        profile: {
          ...state.profile,
          ...action.updates
        }
      };
    default:
      return state;
  }
}