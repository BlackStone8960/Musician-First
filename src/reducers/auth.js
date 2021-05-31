export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN': 
      return action.user;
    case 'LOGOUT':
      return {};
    case 'SIGNUP':
      return {
        ...state,
        signup: action.signup
      }
    default:
      return state;
  }
};