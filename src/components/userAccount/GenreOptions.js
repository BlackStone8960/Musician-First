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
            <option disabled={currentOtherGenre === "Rock"} value="Rock">
              Rock
            </option>
            <option
              disabled={currentOtherGenre === "Alternative"}
              value="Alternative"
            >
              Alternative
            </option>
            <option
              disabled={currentOtherGenre === "Hip Hop/Rap"}
              value="Hip Hop/Rap"
            >
              Hip Hop/Rap
            </option>
            <option disabled={currentOtherGenre === "Metal"} value="Metal">
              Metal
            </option>
            <option disabled={currentOtherGenre === "Punk"} value="Punk">
              Punk
            </option>
            <option
              disabled={currentOtherGenre === "Progressive Rock"}
              value="Progressive Rock"
            >
              Progressive Rock
            </option>
            <option
              disabled={currentOtherGenre === "Indie Rock"}
              value="Indie Rock"
            >
              Indie Rock
            </option>
            <option
              disabled={currentOtherGenre === "Rock & Roll"}
              value="Rock & Roll"
            >
              Rock & Roll
            </option>
            <option
              disabled={currentOtherGenre === "Pop Rock"}
              value="Pop Rock"
            >
              Pop Rock
            </option>
            <option
              disabled={currentOtherGenre === "Rockabilly"}
              value="Rockabilly"
            >
              Rockabilly
            </option>
            <option
              disabled={currentOtherGenre === "Hardcore"}
              value="Hardcore"
            >
              Hardcore
            </option>
            <option
              disabled={currentOtherGenre === "Psychedelic Rock"}
              value="Psychedelic Rock"
            >
              Psychedelic Rock
            </option>
            <option disabled={currentOtherGenre === "Grunge"} value="Grunge">
              Grunge
            </option>
            <option
              disabled={currentOtherGenre === "Industrial"}
              value="Industrial"
            >
              Industrial
            </option>
            <option disabled={currentOtherGenre === "Goth"} value="Goth">
              Goth
            </option>
          </optgroup>
          <optgroup label="Traditional">
            <option disabled={currentOtherGenre === "Folk"} value="Folk">
              Folk
            </option>
            <option disabled={currentOtherGenre === "Blues"} value="Blues">
              Blues
            </option>
            <option disabled={currentOtherGenre === "Jazz"} value="Jazz">
              Jazz
            </option>
            <option
              disabled={currentOtherGenre === "Caribbean"}
              value="Caribbean"
            >
              Caribbean
            </option>
            <option
              disabled={currentOtherGenre === "Indigenous Music"}
              value="Indigenous Music"
            >
              Indigenous Music
            </option>
            <option
              disabled={currentOtherGenre === "Bluegrass"}
              value="Bluegrass"
            >
              Bluegrass
            </option>
            <option disabled={currentOtherGenre === "Country"} value="Country">
              Country
            </option>
            <option
              disabled={currentOtherGenre === "Classical"}
              value="Classical"
            >
              Classical
            </option>
            <option disabled={currentOtherGenre === "Gospel"} value="Gospel">
              Gospel
            </option>
            <option
              disabled={currentOtherGenre === "Christian Rock"}
              value="Christian Rock"
            >
              Christian Rock
            </option>
            <option
              disabled={currentOtherGenre === "Spiritual"}
              value="Spiritual"
            >
              Spiritual
            </option>
          </optgroup>
          <optgroup label="Chill">
            <option
              disabled={currentOtherGenre === "Singer-Songwriter"}
              value="Singer-Songwriter"
            >
              Singer-Songwriter
            </option>
            <option
              disabled={currentOtherGenre === "Alternative"}
              value="Alternative"
            >
              Alternative
            </option>
            <option disabled={currentOtherGenre === "Pop"} value="Pop">
              Pop
            </option>
            <option disabled={currentOtherGenre === "Lofi"} value="Lofi">
              Lofi
            </option>
            <option
              disabled={currentOtherGenre === "Adult Contemporary"}
              value="Adult Contemporary"
            >
              Adult Contemporary
            </option>
            <option disabled={currentOtherGenre === "Blues"} value="Blues">
              Blues
            </option>
            <option
              disabled={currentOtherGenre === "Trip Hop"}
              value="Trip Hop"
            >
              Trip Hop
            </option>
            <option
              disabled={currentOtherGenre === "Easy Listening"}
              value="Easy Listening"
            >
              Easy Listening
            </option>
            <option
              disabled={currentOtherGenre === "Christian Rock"}
              value="Christian Rock"
            >
              Christian Rock
            </option>
            <option disabled={currentOtherGenre === "Surf"} value="Surf">
              Surf
            </option>
            <option
              disabled={currentOtherGenre === "Bluegrass"}
              value="Bluegrass"
            >
              Bluegrass
            </option>
          </optgroup>
          <optgroup label="Dance">
            <option disabled={currentOtherGenre === "Techno"} value="Techno">
              Techno
            </option>
            <option
              disabled={currentOtherGenre === "Deep House"}
              value="Deep House"
            >
              Deep House
            </option>
            <option disabled={currentOtherGenre === "Trap"} value="Trap">
              Trap
            </option>
            <option disabled={currentOtherGenre === "RnB"} value="RnB">
              RnB
            </option>
            <option
              disabled={currentOtherGenre === "Drum & Bass"}
              value="Drum & Bass"
            >
              Drum & Bass
            </option>
            <option disabled={currentOtherGenre === "Dance"} value="Dance">
              Dance
            </option>
            <option disabled={currentOtherGenre === "Funk"} value="Funk">
              Funk
            </option>
            <option disabled={currentOtherGenre === "EDM"} value="EDM">
              EDM
            </option>
            <option disabled={currentOtherGenre === "Reggae"} value="Reggae">
              Reggae
            </option>
            <option disabled={currentOtherGenre === "Bass"} value="Bass">
              Bass
            </option>
            <option disabled={currentOtherGenre === "Disco"} value="Disco">
              Disco
            </option>
            <option disabled={currentOtherGenre === "Electro"} value="Electro">
              Electro
            </option>
            <option
              disabled={currentOtherGenre === "Dub Step"}
              value="Dub Step"
            >
              Dub Step
            </option>
            <option disabled={currentOtherGenre === "Jazz"} value="Jazz">
              Jazz
            </option>
            <option disabled={currentOtherGenre === "Blues"} value="Blues">
              blues
            </option>
            <option
              disabled={currentOtherGenre === "Dancehall"}
              value="Dancehall"
            >
              Dancehall
            </option>
            <option disabled={currentOtherGenre === "Trance"} value="Trance">
              Trance
            </option>
            <option disabled={currentOtherGenre === "Latin"} value="Latin">
              Latin
            </option>
          </optgroup>
          <optgroup label="Far Out">
            <option disabled={currentOtherGenre === "Noise"} value="Noise">
              Noise
            </option>
            <option
              disabled={currentOtherGenre === "Avant-garde"}
              value="Avant-garde"
            >
              Avant Garde
            </option>
            <option
              disabled={currentOtherGenre === "Experimental"}
              value="Experimental"
            >
              Experimantal
            </option>
            <option
              disabled={currentOtherGenre === "Art Rock"}
              value="Art Rock"
            >
              Art Rock
            </option>
            <option
              disabled={currentOtherGenre === "Soundscapes"}
              value="Soundscapes"
            >
              Soundscapes
            </option>
            <option disabled={currentOtherGenre === "New Age"} value="New Age">
              New Age
            </option>
            <option disabled={currentOtherGenre === "8bit"} value="8bit">
              8bit
            </option>
            <option
              disabled={currentOtherGenre === "New Classical"}
              value="New Classical"
            >
              New Classical
            </option>
            <option
              disabled={currentOtherGenre === "Instrumental"}
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
