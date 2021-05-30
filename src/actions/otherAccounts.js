import database from '../firebase/firebase';
import { setUserAccount } from './userAccount';

export const setOtherAccounts = (otherAccounts) => ({
  type: "SET_OTHER_ACCOUNTS",
  otherAccounts
});

export const startSetAccounts = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref('userData').once('value')
    .then((snapshot) => {
      const otherAccounts = [];
      let hasSignedUp = false;
      snapshot.forEach((childSnapshot) => {
        if(childSnapshot.key === uid) {
          dispatch(setUserAccount({ ...childSnapshot.val() })); // dispatch userAccount's information
          hasSignedUp = true; 
        } else {
          otherAccounts.push({
            // id: childSnapshot.key,
            ...childSnapshot.val()
          })
        }
      });
      console.log(otherAccounts);
      dispatch(setOtherAccounts(otherAccounts));
      return hasSignedUp; // この値をもとに新規ユーザー登録ページに飛ばすかどうかを決めると良いのではないか？
    })
  }
};