export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN': 
      return {
        uid: action.uid
      };
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