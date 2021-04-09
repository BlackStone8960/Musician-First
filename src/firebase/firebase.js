import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/database';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// database.ref('userData')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
    
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//     console.log(expenses);
//   });

// database.ref('userData')
//   .on('value', (snapshot) => {
//     const expenses = [];
    
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//     console.log(expenses);
//   });

// const userData = {
//   name: "Ollie Doggie",
//   job: "Producer",
//   introduction: "I am a very smart dog and I can play any instrument including the dog whistle. I sang on 'Who Let The Dogs Out.'"  
// }

// database.ref('userData/-MXpJdvZlPd8pMLceE9I').update({
//   job: "Guitarist"
// });
// database.ref('userData').push(userData);
// database.ref('userData').push(userData);

// database.ref().set({
//   name: "Ollie Doggie",
//   job: "Producer",
//   introduction: "I am a very smart dog and I can play any instrument including the dog whistle. I sang on 'Who Let The Dogs Out.'"  
// });

// database.ref()
// .once('value')
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// })
// .catch((e) => {
//   console.log('Error fetching data', e);
// });

// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// })

export { firebase, googleAuthProvider, database as default };