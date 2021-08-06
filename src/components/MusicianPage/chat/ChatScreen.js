import React, { useMemo, useEffect, useState } from 'react'
import useFetchAllChatData from '../../../hooks/useFetchAllChatData';
import MessageLeft from './MessageLeft';
import MessageRight from './MessageRight';
import moment from 'moment';
import { connect } from 'react-redux';
import database from '../../../firebase/firebase';

const ChatScreen = ({ uid, otherId, otherProfile = null }) => {
  const [dataList, setDataList] = useState([]);
  const [orderedRef, setOrderedRef] = useState(null);
  let viewDate = "";

  useEffect(() => {
    if (uid && otherId) {
      let ref = null;

      // check if chat id exists or not
      database.ref("/messages").once("value").then(snapshot => {
        if (snapshot.child(`${uid}_${otherId}`).exists()) {
          ref = database.ref(`/messages/${uid}_${otherId}`);
        } else if (snapshot.child(`${otherId}_${uid}`).exists()) {
          ref = database.ref(`/messages/${otherId}_${uid}`);
        }
        setOrderedRef(ref && ref.orderByChild('createdAt').limitToLast(30));
      });
    }
  }, [uid, otherId]);

  useEffect(() => {
    if (orderedRef) {
      orderedRef.on('value', snapshot => {
        if (snapshot && snapshot.val()) {
          console.log('snapshot.val()');
          const data = snapshot.val();
          setDataList(Object.entries(data || {}).map(([key, value]) => ({ key, value })));
        }
      })
      return () => {
        orderedRef.off();
      };
    }
  }, [orderedRef]);

  useEffect(() => {
    console.log(dataList);
  }, [dataList]);

  const showViewDate = (value) => {
    const formattedCreatedAt = moment(value.createdAt).format('YYYY/MM/DD')
    if (viewDate !== formattedCreatedAt) {
      viewDate = formattedCreatedAt;
      return viewDate;
    }
  }

  return (
    <div>
      <div>{dataList.length === 0 && "loading..."}</div>
      {dataList.map(({ key, value }) => (
        <React.Fragment key={`${key}`}>
          <div className="view-date">{showViewDate(value)}</div>
          {
            uid !== value.uid ? (
              <MessageLeft {...value} otherProfile={otherProfile} />
            ) : (
              <MessageRight {...value} />
            )
          }
        </React.Fragment>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  uid: state.userAccount.id,
  photoUrl: state.userAccount.profile.photoUrl
});

export default connect(mapStateToProps)(ChatScreen);
