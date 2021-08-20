export const addSelectedGenre = (selectedGenre) => ({
  type: "ADD_SELECTED_GENRE",
  selectedGenre,
});

export const removeSelectedGenre = (selectedGenre) => ({
  type: "REMOVE_SELECTED_GENRE",
  selectedGenre,
});

export const resetSelectedGenres = (selectedGenre) => ({
  type: "RESET_SELECTED_GENRES",
  selectedGenre: [],
});
