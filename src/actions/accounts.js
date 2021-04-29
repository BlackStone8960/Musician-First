import database from '../firebase/firebase';

export const createAccount = (account) => ({
  type: 'CREATE_ACCOUNT',
  account
});

export const startCreateAccount = (accountData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      firstName,
      lastName,
      email,
      phone,
      occupation,
      bio,
      primaryGenre,
      secondaryGenre
    } = accountData;
    const account = { firstName, lastName, email, phone, occupation, bio, primaryGenre, secondaryGenre };

    return database.ref(`userData/${uid}/profile`).set(account).then((ref) => {
      dispatch(createAccount({
        id: uid,
        profile: { ...account }
      }));
    });
  };
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