import React, { useEffect, useState } from 'react';
import { startEditUserAccount } from '../actions/userAccount';
import { connect } from 'react-redux';
import { firebase, storage } from '../firebase/firebase';

export const ProfilePage = (props) => {
  const [photo, setPhoto] = useState("");
  const [photoUrl, setPhotoUrl] = useState(props.profile.photoUrl);
  const [firstName, setFirstName] = useState(props.profile.firstName);
  const [lastName, setLastName] = useState(props.profile.lastName);
  const [email, setEmail] = useState(props.profile.email);
  const [phone, setPhone] = useState(props.profile.phone);
  const [bio, setBio] = useState(props.profile.bio);
  const [primaryGenre, setPrimaryGenre] = useState(props.profile.primaryGenre);
  const [secondaryGenre, setSecondaryGenre] = useState(props.profile.secondaryGenre);
  const [occupation, setOccupation] = useState(props.profile.occupation);
  const [song, setSong] = useState(props.profile.song);
  const [errorState, setErrorState] = useState('');

  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
  }

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
  
  const onSubmit = (e) => {
    e.preventDefault();
    if(!firstName || !lastName || !email || !primaryGenre) {
      setErrorState('Please fill in the mandatory information');
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
        song,
        primaryGenre,
        secondaryGenre
      })
    }
    props.history.push("/filter1");
  };

  const error = (error) => {
    console.log(`Error occured : ${error}`);
  };

  const complete = () => {
    storage.ref("photos").child(props.id).getDownloadURL().then((url) => {
      setPhotoUrl(url);
    })
  }

  return (
    <section className="main">
      <div className="main__wrapper">
        <form>
          {errorState && <p>{errorState}</p>}
          <div className="profile-upper">
            <div>
              <img src={photoUrl} alt="profile-photo" className="profile-photo"></img>
              <div className="photo-buttons">
                <label>
                  <div className="button--filter2">Change photo</div>
                  <input
                    type="file"
                    onChange={handlePhoto}
                    name="change-photo"
                    className="change-photo"
                    accept="image/*"
                  >
                  </input>
                </label>
                <div className="button--filter2" onClick={() => setPhoto('')}>Remove photo</div>
              </div>
            </div>
            <div>
              <div className="name-flex">
                <div>
                  <label>First Name</label><br></br>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <label>Last Name</label><br></br>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label>Bio</label><br></br>
                <textarea
                  cols="50"
                  rows="5"
                  id="bio"
                  name="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="profile-lower">
            <div>
              <div>
                <label>Email</label><br></br>
                <input
                  type="mail"
                  id="mail"
                  name="mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label>Phone</label><br></br>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div>
                <label>Occupation</label><br></br>
                <input
                  type="radio"
                  id="artist"
                  name="occupation"
                  value="artist"
                  defaultChecked={props.artist}
                  onClick={(e) => setOccupation(e.target.value)}
                />Artist
                <input
                  type="radio"
                  id="producer"
                  name="occupation"
                  value="producer"
                  defaultChecked={!props.artist}
                  onClick={(e) => setOccupation(e.target.value)}
                />Producer
              </div>
              <div>
                <label>Primary Genre</label><br></br>
                <select
                  id="primary-genre"
                  name="primary-genre"
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
              <div>
                <label>Secondary Genre</label><br></br>
                <select
                  id="secondary-genre"
                  name="secondary-genre"
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
          <input type="button" onClick={onSubmit} value="SAVE" />
        </form>
      </div>
    </section>
  )
};

const mapStateToProps = (state) => ({
  id: state.userAccount.id,
  profile: state.userAccount.profile
});

const mapDispatchToProps = (dispatch) => ({
  startEditUserAccount: (updates) => dispatch(startEditUserAccount(updates))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);