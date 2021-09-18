import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Contacts from './Contacts';
import TextInput from '../TextInput';
import ChatScreen from '../ChatScreen';
import database from '../../../../firebase/firebase';

const Messages = () => {
  // authからidをとってきてそれをもとにデータベースから
  // 現在のユーザーの入れるルームをリアルタイムで取ってこれるようにする
  const uid = useSelector(state => state.userAccount).id;
  const authId = useSelector(state => state.auth).uid;
  const [roomIds, setRoomIds] = useState([]);
  const [contactsId, setContactsId] = useState([]);

  useEffect(() => {
    if (authId) {
      const roomsRef = database.ref(`/userData/${authId}/rooms`);
      roomsRef.on('value', snapshot => {
        const roomIdsObj = snapshot.val();
        let roomIdArr = [];
        let contactsIdArr = [];

        // fetch chat partner's ID and roomId user can enter
        for (const roomId in roomIdsObj) {
          // Check if roomIdsObj has roomId as property and also user is not blocked by chat partner
          if (Object.prototype.hasOwnProperty.call(roomIdsObj, roomId) && roomIdsObj[roomId]) {
            roomIdArr.push(roomId);
            const uids = roomId.split('_'); // array that contains user ids who use chat room that has roomId
            uids.forEach(eachUid => { eachUid !== uid && contactsIdArr.push(eachUid) })
          }
        }
        setRoomIds(roomIdArr);
        setContactsId(contactsIdArr);
      })
      return () => {
        roomsRef.off();
      };
    }
  }, [authId]);

  useEffect(() => {
    if (roomIds.length !== 0 && contactsId.length !== 0) {
      console.log(`roomIds: `);
      console.log(roomIds);
      console.log(`contactsId: `);
      console.log(contactsId);
    }
  }, [roomIds, contactsId]);

  return (
    <div className="massages-container">
      {/* Context API を使う？ */}
      {/* <Contacts />
      <div className="chat-box">
        <ChatScreen
          uid={uid}
          roomId={roomId}
        />
        <TextInput
          uid={uid}
          roomId={roomId}
          className="text-input"
        />
      </div > */}
      <div>This is messages component</div>
    </div>
  )
}

export default Messages
