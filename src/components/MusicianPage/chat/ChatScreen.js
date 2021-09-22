import React, { useEffect, useState } from "react";
import MessageLeft from "./MessageLeft";
import MessageRight from "./MessageRight";
import moment from "moment";
import database from "../../../firebase/firebase";

const ChatScreen = ({ uid, otherId, roomId }) => {
  const [dataList, setDataList] = useState([]);
  const [orderedRef, setOrderedRef] = useState(null);
  let viewDate = "";

  useEffect(() => {
    if (uid && otherId) {
      let ref = null;
      ref = database.ref(`/messages/${roomId}`);
      setOrderedRef(ref && ref.orderByKey().limitToLast(16));
    }
  }, [uid, otherId]);

  useEffect(() => {
    if (orderedRef) {
      orderedRef.on("value", (snapshot) => {
        if (snapshot && snapshot.val()) {
          if (!snapshot.child("firstTimeFlag").exists()) {
            database.ref(`/messages/${roomId}/firstTimeFlag`).set(true);
            return;
          }
          console.log("snapshot.val()");
          const data = snapshot.val();
          setDataList(
            Object.entries(data || {}).map(([key, value]) => ({ key, value }))
          );
        }
      });
      return () => {
        orderedRef.off();
      };
    }
  }, [orderedRef]);

  useEffect(() => {
    console.log(dataList);
  }, [dataList]);

  const showViewDate = (value) => {
    const formattedCreatedAt = moment(value.createdAt).format("YYYY/MM/DD");
    if (viewDate !== formattedCreatedAt) {
      viewDate = formattedCreatedAt;
      return viewDate;
    }
  };

  return (
    <div className="chat-container">
      <div className="paper">
        <div className="messages-body">
          {/* <div>{dataList.length === 0 && "loading..."}</div> */}
          {dataList.map(({ key, value }) => (
            <React.Fragment key={`${key}`}>
              <div className="view-date">{showViewDate(value)}</div>
              {value.uid && uid !== value.uid ? (
                <MessageLeft {...value} />
              ) : (
                <MessageRight {...value} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
