const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const database = admin.database();

exports.giveAdmission = functions.database.ref('/messages/{roomId}/firstTimeFlag')
  .onCreate((snapshot, context) => {
    console.log('giveAdmission executed!');
    const roomId = context.params.roomId;
    console.log(roomId);
    const roomTicket = { [roomId]: true };
    const userIds = roomId.split('_');

    if (userIds.length === 2) {
      database.ref('/userData').once('value')
        .then((snapshot) => {
          console.log(snapshot.key);
          const allUsers = snapshot.val();
          const matchedUserId = [];
          for (const userId in allUsers) {
            if (Object.prototype.hasOwnProperty.call(allUsers, userId)) {
              const uuid = allUsers[userId].id;
              if (uuid === userIds[0] || uuid === userIds[1]) {
                matchedUserId.push(userId);
              }
            } else {
              console.log("allUsers don't have id");
              return;
            }
          }
          database.ref(`/userData/${matchedUserId[0]}/rooms`).update(roomTicket)
            .then(() => {
              database.ref(`/userData/${matchedUserId[1]}/rooms`).update(roomTicket);
            })
            .catch((e) => {
              console.log(`Error happened! : ${e}`);
            });
        });
    } else {
      console.log("Couldn't get user IDs.");
    }
  });