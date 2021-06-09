import React, { useEffect, useState } from 'react';
import { startEditUserAccount } from '../../actions/userAccount';
import { connect } from 'react-redux';
import { firebase, storage } from '../../firebase/firebase';
import { Link } from 'react-router-dom';

const EmbeddedURLRoot = "https://open.spotify.com/embed/";

export const ProfilePage = (props) => {
  const [photo, setPhoto] = useState("");
  const [photoUrl, setPhotoUrl] = useState(props.profile.photoUrl || "/images/profile_photo_default.png");
  const [firstName, setFirstName] = useState(props.profile.firstName);
  const [lastName, setLastName] = useState(props.profile.lastName);
  const [email, setEmail] = useState(props.profile.email);
  const [phone, setPhone] = useState(props.profile.phone);
  const [bio, setBio] = useState(props.profile.bio);
  const [primaryGenre, setPrimaryGenre] = useState(props.profile.primaryGenre);
  const [secondaryGenre, setSecondaryGenre] = useState(props.profile.secondaryGenre);
  const [occupation, setOccupation] = useState(props.profile.occupation);
  const [song1, setSong1] = useState(decodeURI(props.profile.songs.song1));
  const [song2, setSong2] = useState(decodeURI(props.profile.songs.song2));
  const [song3, setSong3] = useState(decodeURI(props.profile.songs.song3));
  const [errorState, setErrorState] = useState('');

  useEffect(() => {
    console.log(`song1: ${song1}`);
    console.log(`song2: ${song2}`);
    console.log(`song3: ${song3}`);
  }, [song1, song2, song3]);
  
  useEffect(() => {
    // ~MB以上なら圧縮するような処理を入れる(?)
    if (photo === "") return; // ごり押し・・・
    const uploadTask = storage.ref(`photos/${props.id}`).put(photo);
    const unsubscribe = uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      null,
      error,
      complete
    );
    return () => {
      unsubscribe();
    }
  }, [photo]);

  const error = (error) => {
    console.log(`Error occured : ${error}`);
  };

  const complete = () => {
    storage.ref("photos").child(props.id).getDownloadURL().then((url) => {
      setPhotoUrl(url);
    })
  }

  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
  }

// const findEmbeddedURL = (input) => {
//   const startPosition = input.indexOf(EmbeddedURLRoot) + EmbeddedURLRoot.length;
//   const endPosition = input.indexOf('"', startPosition);
//   return input.substring(startPosition, endPosition);
// };

  const isVerifiedSongURL = (songArr) => {
    let verified = true;
    songArr.forEach((song) => {
      if (song && !song.includes(EmbeddedURLRoot)) verified = false;
    })
    return verified;
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    if(!firstName || !lastName || !email || !primaryGenre) {
      setErrorState('Please fill in the mandatory information');
    } else if (!isVerifiedSongURL([ song1, song2, song3 ])) {
      setErrorState('Input embed code as song information');
    } else {
      setErrorState('');
      props.startEditUserAccount({
        photoUrl,
        firstName,
        lastName,
        email,
        phone,
        occupation,
        bio,
        primaryGenre,
        secondaryGenre,
        songs: { song1, song2, song3 }
      })
      props.history.push("/filter1");
    }
  };

  return (
    <React.Fragment>
      <form>
        <div className="profile-upper">
          <div className="input-block">
            <img src={photoUrl} alt="profile-photo" className="profile-photo"></img>
            <div className="photo-buttons">
              <label>
                <div className="button--photo">Change photo</div>
                <input
                  type="file"
                  onChange={handlePhoto}
                  className="change-photo"
                  accept="image/*"
                >
                </input>
              </label>
              <div className="button--photo" onClick={() => setPhoto('')}>Remove photo</div>
            </div>
          </div>
          <div>
            <div className="name-flex input-block">
              <div>
                <label>First Name</label><br></br>
                <input
                  type="text"
                  id="first-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label>Last Name</label><br></br>
                <input
                  type="text"
                  id="last-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="input-block">
              <label>Bio</label><br></br>
              <textarea
                cols="50"
                rows="5"
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="profile-lower">
          <div>
            <div className="input-block">
              <label>Email</label><br></br>
              <input
                type="mail"
                id="mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label>Phone</label><br></br>
              <input
                type="number"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            { 
              props.providerId === "password" && (
                <Link to="/change_password">
                  <input type="button" value="Change Password" className="button--config"></input>
                </Link>
              )
            }
          </div>
          <div>
            <div className="input-block">
              <label>Occupation</label><br></br>
              <input
                type="radio"
                id="artist"
                value="artist"
                defaultChecked={props.artist}
                onClick={(e) => setOccupation(e.target.value)}
              />Artist
              <input
                type="radio"
                id="producer"
                value="producer"
                defaultChecked={!props.artist}
                onClick={(e) => setOccupation(e.target.value)}
              />Producer
            </div>
            <div className="input-block">
              <label>Primary Genre</label><br></br>
              <select
                id="primary-genre"
                value={primaryGenre}
                onChange={(e) => setPrimaryGenre(e.target.value)}
              >
                <option value="rock">Rock</option>
                <option value="alternative">Alternative</option>
                <option value="hiphop-rap">Hip Hop/Rap</option>
                <option value="metal">Metal</option>
                <option value="punk">Punk</option>
                <option value="progressive-rock">Progressive Rock</option>
                <option value="indie-rock">Indie Rock</option>
              </select>
            </div>
            <div className="input-block">
              <label>Secondary Genre</label><br></br>
              <select
                id="secondary-genre"
                value={secondaryGenre}
                onChange={(e) => setSecondaryGenre(e.target.value)}
              >
                <option value="rock">Rock</option>
                <option value="alternative">Alternative</option>
                <option value="hiphop-rap">Hip Hop/Rap</option>
                <option value="metal">Metal</option>
                <option value="punk">Punk</option>
                <option value="progressive-rock">Progressive Rock</option>
                <option value="indie-rock">Indie Rock</option>
              </select>
            </div>
          </div>
        </div>
        <div className="input-block">
          <label>Songs</label><br></br>
          <input
            type="text"
            value={song1}
            onChange={(e) => { setSong1(e.target.value) }}
          />
          <input
            type="text"
            value={song2}
            onChange={(e) => { setSong2(e.target.value) }}
          />
          <input
            type="text"
            value={song3}
            onChange={(e) => { setSong3(e.target.value) }}
            // onChange={(e) => { e.target.value.includes(EmbeddedURLRoot) ? setSong3(findEmbeddedURL(e.target.value)) : setErrorState('Input embed code as song information.') }}
          />
        </div> 
        {errorState && <div className="error-message">{errorState}</div>}
        <input type="button" onClick={onSubmit} value="SAVE" className="button--config save" />
      </form>
    </React.Fragment>
  )
};

const mapStateToProps = (state) => ({
  id: state.userAccount.id,
  profile: state.userAccount.profile,
  providerId: state.auth.providerId
});

const mapDispatchToProps = (dispatch) => ({
  startEditUserAccount: (updates) => dispatch(startEditUserAccount(updates))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);