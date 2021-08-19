import React, { useState } from "react";
import { connect } from "react-redux";
import { startSetUserAccount } from "../../actions/userAccount";
import GenreOptions from "./GenreOptions";

export const SignUp = (props) => {
  // use Custom Hook later
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(props.email || "");
  const [phone, setPhone] = useState("");
  const [occupation, setOccupation] = useState("");
  const [bio, setBio] = useState("");
  const [primaryGenre, setPrimaryGenre] = useState("");
  const [secondaryGenre, setSecondaryGenre] = useState("");
  const [error, setError] = useState("");
  console.log(primaryGenre, secondaryGenre);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !primaryGenre) {
      setError("Please fill in the mandatory information");
    } else {
      setError("");
      props.startSetUserAccount({
        photoUrl: "/images/profile_photo_default.png",
        firstName,
        lastName,
        email,
        phone,
        occupation,
        bio,
        primaryGenre,
        secondaryGenre,
        songs: { song1: "", song2: "", song3: "" },
      });
      props.history.push("/filter1");
    }
  };

  return (
    <React.Fragment>
      <form className="signup-form">
        <div className="name-flex">
          <div className="input-block">
            <label>First Name</label>
            <br></br>
            <input
              type="text"
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-block">
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
            className="radio"
          />
          Producer
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
        <GenreOptions
          id={"primary-genre"}
          genre={primaryGenre}
          currentOtherGenre={secondaryGenre}
          setGenre={setPrimaryGenre}
          isSignUpPage={true}
        />
        <GenreOptions
          id={"secondary-genre"}
          genre={secondaryGenre}
          currentOtherGenre={primaryGenre}
          setGenre={setSecondaryGenre}
          isSignUpPage={true}
        />
        {error ? (
          <p className="signup-error">{error}</p>
        ) : (
          <div className="signup-error-spacing"></div>
        )}
        <input
          type="button"
          onClick={onSubmit}
          value="CREATE ACCOUNT"
          className="button--config"
        />
      </form>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  email: state.auth.email,
});

const mapDispatchToProps = (dispatch) => ({
  startSetUserAccount: (accountData) =>
    dispatch(startSetUserAccount(accountData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
