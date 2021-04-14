import database from '../firebase/firebase';

export const setAccounts = (accounts) => ({
  type: "SET_ACCOUNTS",
  accounts
});

export const startSetAccounts = () => {
  return (dispatch) => {
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