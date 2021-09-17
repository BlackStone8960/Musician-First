const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.giveAdmission = functions.database.ref('/messages/{roomId}/firstTimeFlag')
  .onCreate((snapshot, context) => {
    console.log('giveAdmission executed!');
    console.log(context.params.roomId);
  });