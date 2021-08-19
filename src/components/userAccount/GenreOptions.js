import React from "react";

const GenreOptions = ({
  id,
  genre,
  currentOtherGenre,
  setGenre,
  isSignUpPage,
}) => {
  return (
    <React.Fragment>
      <div className="input-block">
        {id === "primary-genre" ? (
          <label>Primary Genre</label>
        ) : (
          <label>Secondary Genre</label>
        )}
        <br></br>
        <select
          id={id}
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          {isSignUpPage && (
            <option value="" defaultValue disabled>
              Select Genre
            </option>
          )}
          <optgroup label="Edgy">
            <option
              disabled={currentOtherGenre === "rock" ? true : false}
              value="rock"
            >
              Rock
            </option>
            <option
              disabled={currentOtherGenre === "alternative" ? true : false}
              value="alternative"
            >
              Alternative
            </option>
            <option
              disabled={currentOtherGenre === "hiphop rap" ? true : false}
              value="hiphop rap"
            >
              Hip Hop/Rap
            </option>
            <option
              disabled={currentOtherGenre === "metal" ? true : false}
              value="metal"
            >
              Metal
            </option>
            <option
              disabled={currentOtherGenre === "punk" ? true : false}
              value="punk"
            >
              Punk
            </option>
            <option
              disabled={currentOtherGenre === "progressive-rock" ? true : false}
              value="progressive-rock"
            >
              Progressive Rock
            </option>
            <option
              disabled={currentOtherGenre === "indie-rock" ? true : false}
              value="indie-rock"
            >
              Indie Rock
            </option>
            <option
              disabled={currentOtherGenre === "rock-n-roll" ? true : false}
              value="rock-n-roll"
            >
              Rock & Roll
            </option>
            <option
              disabled={currentOtherGenre === "pop-rock" ? true : false}
              value="pop-rock"
            >
              Pop Rock
            </option>
            <option
              disabled={currentOtherGenre === "rockabilly" ? true : false}
              value="rockabilly"
            >
              Rockabilly
            </option>
            <option
              disabled={currentOtherGenre === "hardcore" ? true : false}
              value="hardcore"
            >
              Hardcore
            </option>
            <option
              disabled={currentOtherGenre === "pstchedelic-rock" ? true : false}
              value="pstchedelic-rock"
            >
              Psychedelic Rock
            </option>
            <option
              disabled={currentOtherGenre === "grunge" ? true : false}
              value="grunge"
            >
              Grunge
            </option>
            <option
              disabled={currentOtherGenre === "industrial" ? true : false}
              value="industrial"
            >
              Industrial
            </option>
            <option
              disabled={currentOtherGenre === "goth" ? true : false}
              value="goth"
            >
              Goth
            </option>
          </optgroup>
          <optgroup label="Traditional">
            <option
              disabled={currentOtherGenre === "folk" ? true : false}
              value="folk"
            >
              Folk
            </option>
            <option
              disabled={currentOtherGenre === "blues" ? true : false}
              value="blues"
            >
              Blues
            </option>
            <option
              disabled={currentOtherGenre === "jazz" ? true : false}
              value="jazz"
            >
              Jazz
            </option>
            <option
              disabled={currentOtherGenre === "caribbean" ? true : false}
              value="caribbean"
            >
              Caribbean
            </option>
            <option
              disabled={currentOtherGenre === "indigenous-music" ? true : false}
              value="indigenous-music"
            >
              Indigenous Music
            </option>
            <option
              disabled={currentOtherGenre === "bluegrass" ? true : false}
              value="bluegrass"
            >
              Bluegrass
            </option>
            <option
              disabled={currentOtherGenre === "country" ? true : false}
              value="country"
            >
              Country
            </option>
            <option
              disabled={currentOtherGenre === "classical" ? true : false}
              value="classical"
            >
              Classical
            </option>
            <option
              disabled={currentOtherGenre === "gospel" ? true : false}
              value="gospel"
            >
              Gospel
            </option>
            <option
              disabled={currentOtherGenre === "christian-rock" ? true : false}
              value="christian-rock"
            >
              Christian Rock
            </option>
            <option
              disabled={currentOtherGenre === "spiritual" ? true : false}
              value="spiritual"
            >
              Spiritual
            </option>
          </optgroup>
          <optgroup label="Chill">
            <option
              disabled={
                currentOtherGenre === "singer-songwriter" ? true : false
              }
              value="singer-songwriter"
            >
              Singer-Songwriter
            </option>
            <option
              disabled={currentOtherGenre === "alternative" ? true : false}
              value="alternative"
            >
              Alternative
            </option>
            <option
              disabled={currentOtherGenre === "pop" ? true : false}
              value="pop"
            >
              Pop
            </option>
            <option
              disabled={currentOtherGenre === "lofi" ? true : false}
              value="lofi"
            >
              Lofi
            </option>
            <option
              disabled={
                currentOtherGenre === "adult-contemporary" ? true : false
              }
              value="adult-contemporary"
            >
              Adult Contemporary
            </option>
            <option
              disabled={currentOtherGenre === "blues" ? true : false}
              value="blues"
            >
              Blues
            </option>
            <option
              disabled={currentOtherGenre === "trip-hop" ? true : false}
              value="trip-hop"
            >
              Trip Hop
            </option>
            <option
              disabled={currentOtherGenre === "easy-listening" ? true : false}
              value="easy-listening"
            >
              Easy Listening
            </option>
            <option
              disabled={currentOtherGenre === "christian-rock" ? true : false}
              value="christian-rock"
            >
              Christian Rock
            </option>
            <option
              disabled={currentOtherGenre === "surf" ? true : false}
              value="surf"
            >
              Surf
            </option>
            <option
              disabled={currentOtherGenre === "bluegrass" ? true : false}
              value="bluegrass"
            >
              Bluegrass
            </option>
          </optgroup>
          <optgroup label="Dance">
            <option
              disabled={currentOtherGenre === "techno" ? true : false}
              value="techno"
            >
              Techno
            </option>
            <option
              disabled={currentOtherGenre === "deep-house" ? true : false}
              value="deep-house"
            >
              Deep House
            </option>
            <option
              disabled={currentOtherGenre === "trap" ? true : false}
              value="trap"
            >
              Trap
            </option>
            <option
              disabled={currentOtherGenre === "rnb" ? true : false}
              value="rnb"
            >
              RnB
            </option>
            <option
              disabled={currentOtherGenre === "dram-n-bass" ? true : false}
              value="dram-n-bass"
            >
              Drum & Bass
            </option>
            <option
              disabled={currentOtherGenre === "dance" ? true : false}
              value="dance"
            >
              Dance
            </option>
            <option
              disabled={currentOtherGenre === "funk" ? true : false}
              value="funk"
            >
              Funk
            </option>
            <option
              disabled={currentOtherGenre === "edm" ? true : false}
              value="edm"
            >
              EDM
            </option>
            <option
              disabled={currentOtherGenre === "reggae" ? true : false}
              value="reggae"
            >
              Reggae
            </option>
            <option
              disabled={currentOtherGenre === "bass" ? true : false}
              value="bass"
            >
              Bass
            </option>
            <option
              disabled={currentOtherGenre === "disco" ? true : false}
              value="disco"
            >
              Disco
            </option>
            <option
              disabled={currentOtherGenre === "electro" ? true : false}
              value="electro"
            >
              Electro
            </option>
            <option
              disabled={currentOtherGenre === "dub-step" ? true : false}
              value="dub-step"
            >
              Dub Step
            </option>
            <option
              disabled={currentOtherGenre === "jazz" ? true : false}
              value="jazz"
            >
              Jazz
            </option>
            <option
              disabled={currentOtherGenre === "blues" ? true : false}
              value="blues"
            >
              blues
            </option>
            <option
              disabled={currentOtherGenre === "dancehall" ? true : false}
              value="dancehall"
            >
              Dancehall
            </option>
            <option
              disabled={currentOtherGenre === "trance" ? true : false}
              value="trance"
            >
              Trance
            </option>
            <option
              disabled={currentOtherGenre === "latin" ? true : false}
              value="latin"
            >
              Latin
            </option>
          </optgroup>
          <optgroup label="Far Out">
            <option
              disabled={currentOtherGenre === "noise" ? true : false}
              value="noise"
            >
              Noise
            </option>
            <option
              disabled={currentOtherGenre === "avant-garde" ? true : false}
              value="avant-garde"
            >
              Avant Garde
            </option>
            <option
              disabled={currentOtherGenre === "experimantal" ? true : false}
              value="experimantal"
            >
              Experimantal
            </option>
            <option
              disabled={currentOtherGenre === "art-rock" ? true : false}
              value="art-rock"
            >
              Art Rock
            </option>
            <option
              disabled={currentOtherGenre === "soundscapes" ? true : false}
              value="soundscapes"
            >
              Soundscapes
            </option>
            <option
              disabled={currentOtherGenre === "new-age" ? true : false}
              value="new-age"
            >
              New Age
            </option>
            <option
              disabled={currentOtherGenre === "8bit" ? true : false}
              value="8bit"
            >
              8bit
            </option>
            <option
              disabled={currentOtherGenre === "new-classical" ? true : false}
              value="new-classical"
            >
              New Classical
            </option>
            <option
              disabled={currentOtherGenre === "instrumental" ? true : false}
              value="instrumental"
            >
              Instrumental
            </option>
          </optgroup>
        </select>
      </div>
    </React.Fragment>
  );
};

export default GenreOptions;
