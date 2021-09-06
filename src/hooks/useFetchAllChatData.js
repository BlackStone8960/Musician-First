// import { useState, useEffect } from 'react';
// import database from '../firebase/firebase';

// const useFetchAllChatData = (id1, id2) => {
//   let ref = null;
//   const [orderedRef, setOrderedRef] = useState(null);
//   const [data, setData] = useState();

//   // check if chat id exists or not
//   database.ref("/messages").once("value").then(snapshot => {
//     if (snapshot.child(`${id1}_${id2}`).exists()) {
//       ref = database.ref(`/messages/${id1}_${id2}`);
//     } else if (snapshot.child(`${id2}_${id1}`).exists()) {
//       ref = database.ref(`/messages/${id2}_${id1}`);
//     }
//     setOrderedRef(ref && ref.orderByChild('createdAt').limitToLast(30));
//   });

//   useEffect(() => {
//     if (orderedRef) {
//       orderedRef.on('value', snapshot => {
//         if (snapshot && snapshot.val()) {
//           console.log('snapshot.val()');
//           setData(snapshot.val());
//         }
//       })
//       return () => {
//         orderedRef.off();
//       };
//     }
//   }, [orderedRef]);

//   return { data };
// }

// export default useFetchAllChatData;