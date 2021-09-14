const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const adminEmail = functions.config().admin.email;

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
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
      from: gmailEmail,
      to: adminEmail,
      subject: "Message from a user on Musician first",
      text: adminContents(data),
    };
    mailTransport.sendMail(adminMail, (err, info) => {
      if (err) {
        return console.error(`transmission error: ${err}`);
      }
      return console.log("Email sent successfully.");
    });
  });
