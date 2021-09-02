export default (state = [], action) => {
  switch (action.type) {
    case "ADD_SELECTED_GENRE":
      state.push(action.selectedGenre);
      console.log(state);
      // sessionStorage.setItem("selectedGenre");
      return state;
    case "REMOVE_SELECTED_GENRE":
      return state.filter((genre) => genre !== action.selectedGenre);
    case "RESET_SELECTED_GENRES":
      return state;
    default:
      return state;
  }
};
