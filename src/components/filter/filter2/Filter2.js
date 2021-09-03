import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import genresList from "../../../data/genresList";
import MusicGenre from "./MusicGenre";
import {
  addSelectedGenre,
  removeSelectedGenre,
  resetSelectedGenres,
} from "../../../actions/selectedGenres";
import { connect } from "react-redux";
import { reset } from "numeral";
// import selectedGenres from "../../../reducers/selectedGenres";

export const Filter2 = (props) => {
  const [selectCount, setSelectCount] = useState(0);
  const [selectedGenresArr, setSelectedGenresArr] = useState([]);
  const [isClickedArr, setIsClickedArr] = useState([]);
  const [genres, setGenres] = useState(genresList[props.match.params.category]);

  const makeIsClickedCheckList = () => {
    let checkListArr = [];
    for (let i = 0; i < genres.length; i++) {
      checkListArr.push(false);
    }
    setIsClickedArr(checkListArr);
  };

  const onSelect = (index, selectedGenre) => {
    if (isClickedArr[index] && selectCount > 0) {
      const indexOfRemovedGenre = selectedGenresArr.indexOf(selectedGenre);
      isClickedArr.splice(index, 1, !isClickedArr[index]);
      setSelectCount((prevState) => prevState - 1);
      setIsClickedArr(isClickedArr);
      selectedGenresArr.splice(indexOfRemovedGenre, 1);
      setSelectedGenresArr(selectedGenresArr);
      // props.removeSelectedGenre(selectedGenre);
    } else if (!isClickedArr[index] && selectCount < 3) {
      isClickedArr.splice(index, 1, !isClickedArr[index]);
      setSelectCount((prevState) =>
        isClickedArr[index] ? selectCount + 1 : selectCount - 1
      );
      setIsClickedArr(isClickedArr);
      selectedGenresArr.push(selectedGenre);
      setSelectedGenresArr(selectedGenresArr);
      // props.addSelectedGenre(selectedGenre);
    }
  };

  useEffect(() => {
    if (
      genresList &&
      Object.keys(genresList).includes(props.match.params.category)
    ) {
      makeIsClickedCheckList();
      resetSelectedGenres();
    } else {
      props.history.push("/page-not-found");
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("selectedGenres", JSON.stringify(selectedGenresArr));
  }, [selectCount]);

  return (
    <React.Fragment>
      {genresList &&
        Object.keys(genresList).includes(props.match.params.category) && (
          <React.Fragment>
            <p className="filter-topmassage">
              Let’s get specific. Pick at least three styles that represent your
              project.<br></br>
              You will be matched by someone who understands these specific
              vibes.
            </p>
            <div className="filter-wrapper">
              {genres.map((genre, index) => (
                <MusicGenre
                  key={index}
                  index={index}
                  musicGenre={genre}
                  onSelect={onSelect}
                  isClickedArr={isClickedArr}
                />
              ))}
            </div>
            <div className="button findcollaborator">
              {selectCount > 0 ? (
                <Link className="button-anchor" to="/filter3">
                  Find my collaborator
                </Link>
              ) : (
                <div className="button-anchor unactive">
                  Find my collaborator
                </div>
              )}
            </div>
            <p className="filter-bottommassage">
              Didn’t find your style? Just search here and we may have exactly
              what you are looking for.
            </p>
            <input
              className="genreSearch"
              type="text"
              placeholder="Type Link genre"
            ></input>
          </React.Fragment>
        )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  selectedGenres: state.selectedGenres,
});

const mapDispatchToProps = (dispatch) => ({
  addSelectedGenre: (selectedGenre) =>
    dispatch(addSelectedGenre(selectedGenre)),
  removeSelectedGenre: (selectedGenre) =>
    dispatch(removeSelectedGenre(selectedGenre)),
  resetSelectedGenres: () => dispatch(resetSelectedGenres()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter2);
