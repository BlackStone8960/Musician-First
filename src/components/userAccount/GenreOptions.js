import React from "react";

const GenreOptions = ({
  id,
  genre,
  currentOtherGenre,
  setGenre,
  isSignUpPage,
}) => {
  console.log(genre);
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
              disabled={currentOtherGenre === "Rock" ? true : false}
              value="Rock"
            >
              Rock
            </option>
            <option
              disabled={currentOtherGenre === "Alternative" ? true : false}
              value="Alternative"
            >
              Alternative
            </option>
            <option
              disabled={currentOtherGenre === "Hip Hop/Rap" ? true : false}
              value="Hip Hop/Rap"
            >
              Hip Hop/Rap
            </option>
            <option
              disabled={currentOtherGenre === "Metal" ? true : false}
              value="Metal"
            >
              Metal
            </option>
            <option
              disabled={currentOtherGenre === "Punk" ? true : false}
              value="Punk"
            >
              Punk
            </option>
            <option
              disabled={currentOtherGenre === "Progressive Rock" ? true : false}
              value="Progressive Rock"
            >
              Progressive Rock
            </option>
            <option
              disabled={currentOtherGenre === "Indie Rock" ? true : false}
              value="Indie Rock"
            >
              Indie Rock
            </option>
            <option
              disabled={currentOtherGenre === "Rock & Roll" ? true : false}
              value="Rock & Roll"
            >
              Rock & Roll
            </option>
            <option
              disabled={currentOtherGenre === "Pop Rock" ? true : false}
              value="Pop Rock"
            >
              Pop Rock
            </option>
            <option
              disabled={currentOtherGenre === "Rockabilly" ? true : false}
              value="Rockabilly"
            >
              Rockabilly
            </option>
            <option
              disabled={currentOtherGenre === "Hardcore" ? true : false}
              value="Hardcore"
            >
              Hardcore
            </option>
            <option
              disabled={currentOtherGenre === "Psychedelic Rock" ? true : false}
              value="Psychedelic Rock"
            >
              Psychedelic Rock
            </option>
            <option
              disabled={currentOtherGenre === "Grunge" ? true : false}
              value="Grunge"
            >
              Grunge
            </option>
            <option
              disabled={currentOtherGenre === "Industrial" ? true : false}
              value="Industrial"
            >
              Industrial
            </option>
            <option
              disabled={currentOtherGenre === "Goth" ? true : false}
              value="Goth"
            >
              Goth
            </option>
          </optgroup>
          <optgroup label="Traditional">
            <option
              disabled={currentOtherGenre === "Folk" ? true : false}
              value="Folk"
            >
              Folk
            </option>
            <option
              disabled={currentOtherGenre === "Blues" ? true : false}
              value="Blues"
            >
              Blues
            </option>
            <option
              disabled={currentOtherGenre === "Jazz" ? true : false}
              value="Jazz"
            >
              Jazz
            </option>
            <option
              disabled={currentOtherGenre === "Caribbean" ? true : false}
              value="Caribbean"
            >
              Caribbean
            </option>
            <option
              disabled={currentOtherGenre === "Indigenous Music" ? true : false}
              value="Indigenous Music"
            >
              Indigenous Music
            </option>
            <option
              disabled={currentOtherGenre === "Bluegrass" ? true : false}
              value="Bluegrass"
            >
              Bluegrass
            </option>
            <option
              disabled={currentOtherGenre === "Country" ? true : false}
              value="Country"
            >
              Country
            </option>
            <option
              disabled={currentOtherGenre === "Classical" ? true : false}
              value="Classical"
            >
              Classical
            </option>
            <option
              disabled={currentOtherGenre === "Gospel" ? true : false}
              value="Gospel"
            >
              Gospel
            </option>
            <option
              disabled={currentOtherGenre === "Christian Rock" ? true : false}
              value="Christian Rock"
            >
              Christian Rock
            </option>
            <option
              disabled={currentOtherGenre === "Spiritual" ? true : false}
              value="Spiritual"
            >
              Spiritual
            </option>
          </optgroup>
          <optgroup label="Chill">
            <option
              disabled={
                currentOtherGenre === "Singer-Songwriter" ? true : false
              }
              value="Singer-Songwriter"
            >
              Singer-Songwriter
            </option>
            <option
              disabled={currentOtherGenre === "Alternative" ? true : false}
              value="Alternative"
            >
              Alternative
            </option>
            <option
              disabled={currentOtherGenre === "Pop" ? true : false}
              value="Pop"
            >
              Pop
            </option>
            <option
              disabled={currentOtherGenre === "Lofi" ? true : false}
              value="Lofi"
            >
              Lofi
            </option>
            <option
              disabled={
                currentOtherGenre === "Adult Contemporary" ? true : false
              }
              value="Adult Contemporary"
            >
              Adult Contemporary
            </option>
            <option
              disabled={currentOtherGenre === "Blues" ? true : false}
              value="Blues"
            >
              Blues
            </option>
            <option
              disabled={currentOtherGenre === "Trip Hop" ? true : false}
              value="Trip Hop"
            >
              Trip Hop
            </option>
            <option
              disabled={currentOtherGenre === "Easy Listening" ? true : false}
              value="Easy Listening"
            >
              Easy Listening
            </option>
            <option
              disabled={currentOtherGenre === "Christian Rock" ? true : false}
              value="Christian Rock"
            >
              Christian Rock
            </option>
            <option
              disabled={currentOtherGenre === "Surf" ? true : false}
              value="Surf"
            >
              Surf
            </option>
            <option
              disabled={currentOtherGenre === "Bluegrass" ? true : false}
              value="Bluegrass"
            >
              Bluegrass
            </option>
          </optgroup>
          <optgroup label="Dance">
            <option
              disabled={currentOtherGenre === "Techno" ? true : false}
              value="Techno"
            >
              Techno
            </option>
            <option
              disabled={currentOtherGenre === "Deep House" ? true : false}
              value="Deep House"
            >
              Deep House
            </option>
            <option
              disabled={currentOtherGenre === "Trap" ? true : false}
              value="Trap"
            >
              Trap
            </option>
            <option
              disabled={currentOtherGenre === "RnB" ? true : false}
              value="RnB"
            >
              RnB
            </option>
            <option
              disabled={currentOtherGenre === "Drum & Bass" ? true : false}
              value="Drum & Bass"
            >
              Drum & Bass
            </option>
            <option
              disabled={currentOtherGenre === "Dance" ? true : false}
              value="Dance"
            >
              Dance
            </option>
            <option
              disabled={currentOtherGenre === "Funk" ? true : false}
              value="Funk"
            >
              Funk
            </option>
            <option
              disabled={currentOtherGenre === "EDM" ? true : false}
              value="EDM"
            >
              EDM
            </option>
            <option
              disabled={currentOtherGenre === "Reggae" ? true : false}
              value="Reggae"
            >
              Reggae
            </option>
            <option
              disabled={currentOtherGenre === "Bass" ? true : false}
              value="Bass"
            >
              Bass
            </option>
            <option
              disabled={currentOtherGenre === "Disco" ? true : false}
              value="Disco"
            >
              Disco
            </option>
            <option
              disabled={currentOtherGenre === "Electro" ? true : false}
              value="Electro"
            >
              Electro
            </option>
            <option
              disabled={currentOtherGenre === "Dub Step" ? true : false}
              value="Dub Step"
            >
              Dub Step
            </option>
            <option
              disabled={currentOtherGenre === "Jazz" ? true : false}
              value="Jazz"
            >
              Jazz
            </option>
            <option
              disabled={currentOtherGenre === "Blues" ? true : false}
              value="Blues"
            >
              blues
            </option>
            <option
              disabled={currentOtherGenre === "Dancehall" ? true : false}
              value="Dancehall"
            >
              Dancehall
            </option>
            <option
              disabled={currentOtherGenre === "Trance" ? true : false}
              value="Trance"
            >
              Trance
            </option>
            <option
              disabled={currentOtherGenre === "Latin" ? true : false}
              value="Latin"
            >
              Latin
            </option>
          </optgroup>
          <optgroup label="Far Out">
            <option
              disabled={currentOtherGenre === "Noise" ? true : false}
              value="Noise"
            >
              Noise
            </option>
            <option
              disabled={currentOtherGenre === "Avant-garde" ? true : false}
              value="Avant-garde"
            >
              Avant Garde
            </option>
            <option
              disabled={currentOtherGenre === "Experimental" ? true : false}
              value="Experimental"
            >
              Experimantal
            </option>
            <option
              disabled={currentOtherGenre === "Art Rock" ? true : false}
              value="Art Rock"
            >
              Art Rock
            </option>
            <option
              disabled={currentOtherGenre === "Soundscapes" ? true : false}
              value="Soundscapes"
            >
              Soundscapes
            </option>
            <option
              disabled={currentOtherGenre === "New Age" ? true : false}
              value="New Age"
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
              disabled={currentOtherGenre === "New Classical" ? true : false}
              value="New Classical"
            >
              New Classical
            </option>
            <option
              disabled={currentOtherGenre === "Instrumental" ? true : false}
              value="Instrumental"
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
