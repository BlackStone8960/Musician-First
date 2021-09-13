const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const adminEmail = functions.config().admin.email;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   console.log(functions.config());
//   response.send("Hello from Firebase!");
// });

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

const adminContents = (data) => {
  console.log(data);
  return `Your message below has been sent successfuly.
  Name: ${data.name}
  Email: ${data.email}
  Message: ${data.content}`;
};

exports.sendMail = functions
  .region("us-central1")
  .https.onCall((data, context) => {
    const adminMail = {
      from: gmailEmail,
      to: adminEmail,
      subject: "questionaire from a user on Musician first",
      text: adminContents(data),
    };
    console.log("email function!");
    mailTransport.sendMail(adminMail, (err, info) => {
      if (err) {
        return console.error(`send failed. ${err}`);
      }
      return console.log("send success.");
    });
  });
