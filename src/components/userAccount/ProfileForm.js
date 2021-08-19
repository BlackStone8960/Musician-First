import React, { useEffect, useState } from "react";
import {
  startEditUserAccount,
  startDeleteUserAccount,
} from "../../actions/userAccount";
import { startDeleteAuth } from "../../actions/auth";
import { connect } from "react-redux";
import { firebase, storage } from "../../firebase/firebase";
import { Link, useHistory } from "react-router-dom";
import TrimModal from "./TrimModal";
import MusicPlayer from "../MusicianPage/MusicPlayer";
import DeleteAccountModal from "./DeleteAccountModal";
import GenreOptions from "./GenreOptions";

// const PhotoObjContext = createContext();
const EmbeddedURLRoot = "https://open.spotify.com/embed/";
const defaultPhoto = "/images/profile_photo_default.png";

const readFile = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
};

export const ProfilePage = (props) => {
  const [photoBlob, setPhotoBlob] = useState(null);
  const [originPhotoSrc, setOriginPhotoSrc] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(
    props.profile.photoUrl || defaultPhoto
  );
  const [firstName, setFirstName] = useState(props.profile.firstName);
  const [lastName, setLastName] = useState(props.profile.lastName);
  const [email, setEmail] = useState(props.profile.email);
  const [phone, setPhone] = useState(props.profile.phone);
  const [bio, setBio] = useState(props.profile.bio);
  const [primaryGenre, setPrimaryGenre] = useState(props.profile.primaryGenre);
  const [secondaryGenre, setSecondaryGenre] = useState(
    props.profile.secondaryGenre
  );
  const [occupation, setOccupation] = useState(props.profile.occupation);
  const [song1, setSong1] = useState(
    decodeURI(props.profile.songs.song1) || ""
  );
  const [song2, setSong2] = useState(
    decodeURI(props.profile.songs.song2) || ""
  );
  const [song3, setSong3] = useState(
    decodeURI(props.profile.songs.song3) || ""
  );
  const [encodedSongsArr, setEncodedSongsArr] = useState([]);
  const [errorState, setErrorState] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  let history = useHistory();

  console.log(primaryGenre, secondaryGenre);

  useEffect(() => {
    if (photoBlob) {
      const uploadTask = storage.ref(`photos/${props.id}`).put(photoBlob);
      const unsubscribe = uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        null,
        error,
        complete
      );
      return () => {
        unsubscribe();
      };
    }
  }, [photoBlob]);

  useEffect(() => {
    const songsArr = [song1, song2, song3];
    setEncodedSongsArr(songsArr.map((song) => encodeURI(song)));
  }, [song1, song2, song3]);

  const error = (error) => {
    console.log(`Error occured : ${error}`);
  };

  const complete = () => {
    storage
      .ref("photos")
      .child(props.id)
      .getDownloadURL()
      .then((url) => {
        setPhotoUrl(url);
      });
  };

  const onPhotoChange = async (e) => {
    // 同じ画像を選んだ時も動くようにしておく
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const photoDataUrl = await readFile(file);
      setOriginPhotoSrc(photoDataUrl);
      e.target.value = "";
    }
  };

  const onClose = () => {
    setOriginPhotoSrc(null);
  };

  // const findEmbeddedURL = (input) => {
  //   const startPosition = input.indexOf(EmbeddedURLRoot) + EmbeddedURLRoot.length;
  //   const endPosition = input.indexOf('"', startPosition);
  //   return input.substring(startPosition, endPosition);
  // };

  const isVerifiedSongURL = (songArr) => {
    let verified = true;
    songArr.forEach((song) => {
      if (song && !song.includes(EmbeddedURLRoot)) verified = false;
    });
    return verified;
  };

  // Open modal to prommpt user to confirm.
  const onDeleteUser = (e) => {
    e.preventDefault();
    // history.push("/");
    props.startDeleteUserAccount();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !primaryGenre) {
      setErrorState("Please fill in the mandatory information");
    } else if (!isVerifiedSongURL([song1, song2, song3])) {
      setErrorState("Input embed code as song information");
    } else {
      setErrorState("");
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
        songs: { song1, song2, song3 },
      });
      history.push("/filter1");
    }
  };

  return (
    <React.Fragment>
      <form>
        <div className="profile-upper">
          <div className="input-block">
            <img
              src={photoUrl}
              alt="profile-photo"
              className="profile-photo"
            ></img>
            <div className="photo-buttons">
              <label>
                <div className="button--photo">Change photo</div>
                <input
                  type="file"
                  onChange={onPhotoChange}
                  className="change-photo"
                  accept="image/*"
                ></input>
              </label>
              <div
                className="button--photo"
                onClick={() => setPhotoUrl(defaultPhoto)}
              >
                Remove photo
              </div>
            </div>
          </div>
          <div>
            <div className="name-flex input-block">
              <div>
                <label>First Name</label>
                <br></br>
                <input
                  type="text"
                  id="first-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label>Last Name</label>
                <br></br>
                <input
                  type="text"
                  id="last-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="input-block">
              <label>Bio</label>
              <br></br>
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
              <label>Email</label>
              <br></br>
              <input
                type="mail"
                id="mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label>Phone</label>
              <br></br>
              <input
                type="number"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            {props.providerId === "password" && (
              <Link to="/change_password">
                <input
                  type="button"
                  value="Change Password"
                  className="button--config"
                ></input>
              </Link>
            )}
          </div>
          <div>
            <div className="input-block">
              <label>Occupation</label>
              <br></br>
              <input
                type="radio"
                id="artist"
                value="artist"
                checked={occupation === "artist"}
                onChange={(e) => setOccupation(e.target.value)}
              />
              Artist
              <input
                type="radio"
                id="producer"
                value="producer"
                checked={occupation === "producer"}
                onChange={(e) => setOccupation(e.target.value)}
              />
              Producer
            </div>
            <GenreOptions
              id={"primary-genre"}
              genre={primaryGenre}
              currentOtherGenre={secondaryGenre}
              setGenre={setPrimaryGenre}
            />
            <GenreOptions
              id={"secondary-genre"}
              genre={secondaryGenre}
              currentOtherGenre={primaryGenre}
              setGenre={setSecondaryGenre}
            />
          </div>
        </div>
        <div className="input-block">
          <div className="spotify-wrapper">
            <p className="spotify-description">
              Embed up to 3 Spotify Artists, Albums, or Songs. Must be on a
              desktop computer. <br />
              Click on this{" "}
              <a
                target="_blank"
                href="https://www.jimdo.com/blog/embed-spotify-playlist-on-website/"
                rel="noopener noreferrer"
              >
                link
              </a>{" "}
              for instructions.
            </p>
            <label className="spotify-label">
              <span className="link-label">Link 1</span>
              <input
                type="text"
                value={song1}
                onChange={(e) => {
                  setSong1(e.target.value);
                }}
                className="spotify-link-input"
              />
            </label>
            <br />
            <label className="spotify-label">
              <span className="link-label">Link 2</span>
              <input
                type="text"
                value={song2}
                onChange={(e) => {
                  setSong2(e.target.value);
                }}
                className="spotify-link-input"
              />
            </label>
            <br />
            <label className="spotify-label">
              <span className="link-label">Link 3</span>
              <input
                type="text"
                value={song3}
                onChange={(e) => {
                  setSong3(e.target.value);
                }}
                className="spotify-link-input"
              />
            </label>
            <br />
            <div className="preview-container">
              <div className="player-container">
                <MusicPlayer songs={encodedSongsArr} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <input
            className="delete-account-btn"
            type="button"
            onClick={() => setIsModalOpen(true)}
            value="Delete Account"
          />
        </div>
        {errorState ? (
          <div className="error-message">{errorState}</div>
        ) : (
          <div className="error-message-spacing"></div>
        )}
        <input
          type="button"
          onClick={onSubmit}
          value="SAVE"
          className="button--config save"
        />
      </form>
      {originPhotoSrc && (
        <TrimModal
          originPhotoSrc={originPhotoSrc}
          setPhotoBlob={setPhotoBlob}
          onClose={onClose}
        />
      )}
      {isModalOpen && (
        <DeleteAccountModal
          setIsModalOpen={setIsModalOpen}
          onDeleteUser={onDeleteUser}
        />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  id: state.userAccount.id,
  profile: state.userAccount.profile,
  providerId: state.auth.providerId,
});

const mapDispatchToProps = (dispatch) => ({
  startEditUserAccount: (updates) => dispatch(startEditUserAccount(updates)),
  startDeleteUserAccount: () => dispatch(startDeleteUserAccount()),
  startDeleteAuth: () => dispatch(startDeleteAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
