import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import firebase from "firebase/app";
import "firebase/functions";

console.log(firebase);

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    width: "15rem",
    height: "2.5rem",
    borderRadius: "20px",
    fontSize: "1.1rem",
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    const data = {};
    data.name = name;
    data.email = email;
    data.content = message;
    const sendMail = firebase.functions().httpsCallable("sendMail");
    sendMail(data);
    setName("");
    setEmail("");
    setMessage("");
    e.target.value = "";
    console.log("submitted");
    console.log(data);
  };
  return (
    <React.Fragment>
      <section className="contactform-container">
        <h1 className="contactform-title">Get in touch</h1>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={(e) => onFormSubmit(e)}
        >
          <div className="form-wrap">
            <TextField
              className="text-input name-input"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              className="text-input email-input"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <TextField
            className="textarea"
            id="outlined-textarea"
            label="Message"
            placeholder="Placeholder"
            multiline
            variant="outlined"
            rows={10}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
          >
            SUBMIT
          </Button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default ContactForm;
