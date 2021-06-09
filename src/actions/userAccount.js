import database from '../firebase/firebase';
import { v4 as uuidv4 } from 'uuid';

export const setUserAccount = (account) => ({
  type: 'SET_USER_ACCOUNT',
  account
});

export const startSetUserAccount = (accountData = {}) => {
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
      songs,
      primaryGenre,
      secondaryGenre
    } = accountData;
    const account = { photoUrl, firstName, lastName, email, phone, occupation, songs, bio, primaryGenre, secondaryGenre };

    return database.ref(`userData/${uid}/profile`).set(account)
    .then(() => {
      database.ref(`userData/${uid}/id`).set(id)
    })
    .then(() => {
      dispatch(setUserAccount({
        id,
        profile: { ...account }
      }));
    })
  };
};

export const editUserAccount = (updates) => ({
  type: 'EDIT_USER_ACCOUNT',
  updates
});

export const startEditUserAccount = (updates) => {
  return (dispatch, getState) => {
    // const EmbeddedURLRoot = "https://open.spotify.com/embed/";
    for (const song in updates.songs) {
      updates.songs[song] = encodeURI(updates.songs[song]);
      // const startPosition = updates.songs[song].indexOf(EmbeddedURLRoot) + EmbeddedURLRoot.length;
      // const endPosition = updates.songs[song].indexOf('"', startPosition);
      // updates.songs[song] = updates.songs[song].substring(startPosition, endPosition);  
    }
    const uid = getState().auth.uid;
    return database.ref(`userData/${uid}/profile`).update(updates).then(() => {
      dispatch(editUserAccount({ profile: updates }))
    })
  }
};