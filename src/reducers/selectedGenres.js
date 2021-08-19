export default (state = [], action) => {
  switch (action.type) {
    case "ADD_SELECTED_GENRE":
      state.push(action.selectedGenre);
      console.log(state);
      return state;
    case "REMOVE_SELECTED_GENRE":
      return state.filter((genre) => genre !== action.selectedGenre);
    default:
      return state;
  }
};
