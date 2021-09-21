const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
// const gmailEmail = functions.config().gmail.email;
// const gmailPassword = functions.config().gmail.password;
const outlookEmail = functions.config().outlook.email;
const outlookPassword = functions.config().outlook.password;
const adminEmail = functions.config().admin.email;
// const senderEmail = functions.config().sender.email;

const mailTransport = nodemailer.createTransport({
  host: "smtp.office365.com",
  // secureConnection: false,
  secure: false,
  port: 587,
  // tls: {
  //   ciphers: "SSLv3",
  // },
  // service: "gmail",
  auth: {
    user: outlookEmail,
    pass: outlookPassword,
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
      from: outlookEmail,
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
