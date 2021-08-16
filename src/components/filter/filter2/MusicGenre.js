import React from "react";

const MusicGenre = ({ index, musicGenre, isClickedArr, onSelect }) => {
  return (
    <div
      className={[
        "button",
        "button--filter2",
        isClickedArr[index] ? "clicked" : null,
      ].join(" ")}
      onClick={() => onSelect(index)}
    >
      <div className="button-anchor">{musicGenre}</div>
    </div>
  );
};

export default MusicGenre;
