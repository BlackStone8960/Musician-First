const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const gmailBEmail = functions.config().gmailb.email;
const gmailBPassword = functions.config().gmailb.password;
const adminEmail = functions.config().admin.email;

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailBEmail,
    pass: gmailBPassword,
  },
});

const adminContents = (data) => {
  return `You've got a message from Musician First.
  Name: ${data.name}
  Email: ${data.email}
  Message: ${data.content}`;
};

exports.sendMail = functions
  .region("us-central1")
  .https.onCall((data, context) => {
    const adminMail = {
      from: gmailBEmail,
      to: adminEmail,
      subject: "Message from a user on Musician First",
      text: adminContents(data),
    };
    mailTransport.sendMail(adminMail, (err, info) => {
      if (err) {
        return console.error(`transmission error: ${err}`);
      }
      return console.log("Email sent successfully.");
    });
  });
