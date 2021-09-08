const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const adminEmail = functions.config().admin.email;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const mailTransport = nodemailer.createTestAccount({
  service: "gmail",
  auth: {
    user: gmailEmail,
    password: gmailPassword,
  },
});

const adminContents = (data) => {
  return `Your message below has been sent successfuly.
  Name: ${data.name}
  Email: ${data.email}
  Message: ${data.content}`;
};

// exports.sendmail = functions.https.onCall
