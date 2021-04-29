import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startCreateAccount } from '../actions/accounts';

export const SignUp = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');
  const [primaryGenre, setPrimaryGenre] = useState('');
  const [secondaryGenre, setSecondaryGenre] = useState('');
  const [error, setError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if(!firstName || !lastName || !email || !primaryGenre) {
      setError('Please fill in the mandatory information');
    } else {
      setError('');
      props.startCreateAccount({
        firstName,
        lastName,
        email,
        phone,
        bio,
        primaryGenre,
        secondaryGenre
      })
    }
    props.history.push("/filter1");
  }

  return (
    <section className="main">
      <div className="main__wrapper">
        <form onSubmit={onSubmit}>
          {error && <p>{error}</p>}
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
          <button>CREATE ACCOUNT</button>
        </form>
      </div>
    </section>
  )
};

const mapDispatchToProps = (dispatch) => ({
  startCreateAccount: (accountData) => dispatch(startCreateAccount(accountData))
});

export default connect(undefined, mapDispatchToProps)(SignUp);