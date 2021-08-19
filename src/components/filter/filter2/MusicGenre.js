import React from "react";

const MusicGenre = ({ index, musicGenre, isClickedArr, onSelect }) => {
  return (
    <button
      className={[
        "button",
        "button--filter2",
        isClickedArr[index] ? "clicked" : null,
      ].join(" ")}
      onClick={(e) => onSelect(index, e.target.value)}
      value={musicGenre}
    >
      {musicGenre}
      {/* <div className="button-anchor">{musicGenre}</div> */}
    </button>
  );
};

export default MusicGenre;
