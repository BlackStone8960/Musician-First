import database from '../firebase/firebase';

export const createAccount = (account) => ({
  type: 'CREATE_ACCOUNT',
  account
});

export const startCreateAccount = (accountData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
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

    return database.ref(`userData/${uid}/profile`).set(account).then((ref) => {
      dispatch(createAccount({
        id: uid,
        profile: { ...account }
      }));
    });
  };
};

export const editAccount = (id, updates) => ({
  type: 'EDIT_ACCOUNT',
  id,
  updates
});

export const startEditAccount = (updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`userData/${uid}/profile`).update(updates).then(() => {
      dispatch(editAccount(uid, { id: uid, profile: updates }))
    })
  }
};

export const setAccounts = (accounts) => ({
  type: "SET_ACCOUNTS",
  accounts
});

export const startSetAccounts = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref('userData').once('value')
    .then((snapshot) => {
      const accounts = [];
      snapshot.forEach((childSnapshot) => {
        accounts.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      });
      console.log(accounts);
      dispatch(setAccounts(accounts));
    })
  }
};