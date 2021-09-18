import React, { useState, useEffect, createContext, useContext } from 'react';
import { useSelector } from 'react-redux';
import ContactsList from './ContactsList';
import TextInput from '../TextInput';
import ChatScreen from '../ChatScreen';
import database from '../../../../firebase/firebase';
import Grid from '@material-ui/core/Grid';

const MessagesContext = createContext();

const Messages = () => {
  // authからidをとってきてそれをもとにデータベースから
  // 現在のユーザーの入れるルームをリアルタイムで取ってこれるようにする

  const uid = useSelector(state => state.userAccount).id;
  const authId = useSelector(state => state.auth).uid;
  const [roomIds, setRoomIds] = useState([]);
  const [contactIds, setContactIds] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState(null); // Room Id used between clicked user
  const [selectedContactId, setSelectedContactId] = useState(null); // Clicked user on contacts list

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
        setContactIds(contactsIdArr);
      })
      return () => {
        roomsRef.off();
      };
    }
  }, [authId]);

  useEffect(() => {
    if (selectedContactId) {
      console.log(`Selected contact ID is ${selectedContactId}.`);
      const roomId = roomIds.filter(roomId => roomId.includes(selectedContactId));
      if (roomId.length === 1) {
        setSelectedRoomId(roomId[0]);
      } else if (roomId.length === 0) {
        console.error('No room id matched.');
      } else {
        console.error('Room ID daplicated.');
      }
    }
  }, [selectedContactId])

  // useEffect(() => {
  //   if (roomIds.length !== 0 && contactIds.length !== 0) {
  //     console.log(`roomIds: `);
  //     console.log(roomIds);
  //     console.log(`contactIds: `);
  //     console.log(contactIds);
  //   }
  // }, [roomIds, contactIds]);

  return (
    <MessagesContext.Provider value={{ selectedContactId, setSelectedContactId }}>
      <Grid container className="massages-container">
        <Grid item xs={4} className="contacts-list-wrapper">
          <div className="contacts-header">Contacts</div>
          <ContactsList contactIds={contactIds} />
        </Grid>
        <Grid item xs={8} className="chat-box">
          <div className="chat-box-header">Messages</div>
          <div className="chat-box-chats">
            {selectedRoomId && (
              <React.Fragment>
                <ChatScreen
                  uid={uid}
                  roomId={selectedRoomId}
                />
                <TextInput
                  uid={uid}
                  roomId={selectedRoomId}
                  className="text-input"
                />
              </React.Fragment>
            )}
          </div>
        </Grid >
      </Grid>
    </MessagesContext.Provider>
  )
}

const useMessagesContext = () => useContext(MessagesContext);

export { useMessagesContext, Messages as default };
