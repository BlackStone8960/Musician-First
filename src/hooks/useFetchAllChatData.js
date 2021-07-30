import { useMemo, useState, useEffect } from 'react';
import database from '../firebase/firebase';

const useDatabase = (id1, id2) => {
  const ref = database.ref(`/messages/${id1}_${id2}`) ? database.ref(`/messages/${id1}_${id2}`) : database.ref(`/messages/${id2}_${id1}`)
  return ref ? ref.orderByChild('createdAt').limitToLast(30) : null
}
  
const useFetchData = (ref) => {
  const [data, setData] = useState();
  useEffect(() => {
    ref.on('value', snapshot => {
      if (snapshot?.val()) {
        console.log('snapshot.val()');
        setData(snapshot.val());
      }
    })
    return () => {
      ref.off();
    };
  }, [ref]);
  return { data };
}

const useFetchAllChatData = (id1, id2) => {
  const ref = useDatabase(id1, id2);
  return useFetchData(ref);
}

export default useFetchAllChatData;