import database from '../firebase/firebase';
import { v4 as uuidv4 } from 'uuid';

export const setAccount = (account) => ({
  type: 'SET_ACCOUNT',
  account
});

export const startSetAccount = (accountData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const id = uuidv4(); // Create random generated string when creating account
    const {
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
    } = accountData;
    const account = { photoUrl, firstName, lastName, email, phone, occupation, song, bio, primaryGenre, secondaryGenre };

    return database.ref(`userData/${uid}/profile`).set(account)
    .then(() => {
      database.ref(`userData/${uid}/id`).set(id)
    })
    .then(() => {
      dispatch(setAccount({
        id,
        profile: { ...account }
      }));
    })
  };
};

export const editAccount = (updates) => ({
  type: 'EDIT_ACCOUNT',
  updates
});

export const startEditAccount = (updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`userData/${uid}/profile`).update(updates).then(() => {
      dispatch(editAccount({ profile: updates }))
    })
  }
};