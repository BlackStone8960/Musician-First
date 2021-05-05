// import database from '../firebase/firebase';

// export const createAccount = (account) => ({
//   type: 'CREATE_ACCOUNT',
//   account
// });

// export const startCreateAccount = (accountData = {}) => {
//   return (dispatch, getState) => {
//     const uid = getState().auth.uid;
//     const {
//       photo,
//       firstName,
//       lastName,
//       email,
//       phone,
//       occupation,
//       bio,
//       song,
//       primaryGenre,
//       secondaryGenre
//     } = accountData;
//     const account = { photo, firstName, lastName, email, phone, occupation, song, bio, primaryGenre, secondaryGenre };

//     return database.ref(`userData/${uid}/profile`).set(account).then((ref) => {
//       dispatch(createAccount({
//         id: uid,
//         profile: { ...account }
//       }));
//     });
//   };
// };

// export const editAccount = (updates) => ({
//   type: 'EDIT_ACCOUNT',
//   updates
// });

// export const startEditAccount = (updates) => {
//   return (dispatch, getState) => {
//     const uid = getState().auth.uid;
//     return database.ref(`userData/${uid}/profile`).update(updates).then(() => {
//       dispatch(editAccount(updates))
//     })
//   }
// };