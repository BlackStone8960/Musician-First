import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import firebase from "firebase/app";
import "firebase/functions";
import validator from "validator";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      display: "flex",
      justifyContent: "center",
    },
  },
  textInput: {
    width: "24rem",
    marginBottom: "1rem",
  },
  textArea: {
    width: "50rem",
    marginBottom: "2rem",
  },
  button: {
    width: "15rem",
    height: "2.5rem",
    borderRadius: "20px",
    fontSize: "1.1rem",
    margin: "0 auto",
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isInvalid, setIsinvalid] = useState(null);
  const [errMessages, setErrMessages] = useState([]);
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  console.log(isInvalid);
  console.log(errMessages);

  const isEmptyOrHasWhiteSpace = (input) => {
    if (validator.isEmpty(input) || !input.match(/\S/g)) {
      return true;
    }
  };
  const manageErrMessages = (errorMessage) => {
    if (!errMessages.includes(errorMessage)) {
      setErrMessages((oldArr) => [...oldArr, errorMessage]);
    }
  };

  const removeErrMessage = (errorMessage) => {
    setErrMessages(
      errMessages.filter((errMessage) => errMessage !== errorMessage)
    );
  };

  const validateName = (inputName) => {
    setIsBtnClicked(false);
    const errorMessage = "Please input your name";
    if (isEmptyOrHasWhiteSpace(inputName)) {
      setIsinvalid(true);
      manageErrMessages(errorMessage);
    } else {
      setIsinvalid(false);
      removeErrMessage(errorMessage);
    }
    setName(inputName);
  };

  const validateEmail = (inputEmail) => {
    setIsBtnClicked(false);
    const errorMessage = "Please input a valid email address";
    validator.trim(inputEmail);
    if (!validator.isEmail(inputEmail) || isEmptyOrHasWhiteSpace(inputEmail)) {
      setIsinvalid(true);
      manageErrMessages(errorMessage);
    } else {
      setIsinvalid(false);
      removeErrMessage(errorMessage);
    }
    setEmail(inputEmail);
  };

  const validateMessage = (inputMessage) => {
    setIsBtnClicked(false);
    const errorMessage1 = "Please input your message";
    const errorMessage2 = "Your message is too short";
    if (isEmptyOrHasWhiteSpace(inputMessage)) {
      setIsinvalid(true);
      manageErrMessages(errorMessage1);
    } else {
      setIsinvalid(false);
      removeErrMessage(errorMessage1);
    }
    if (inputMessage.length < 5) {
      setIsinvalid(true);
      manageErrMessages(errorMessage2);
    } else {
      setIsinvalid(false);
      removeErrMessage(errorMessage2);
    }
    setMessage(inputMessage);
  };

  const sendEmail = () => {
    if (isInvalid === false && errMessages.length === 0) {
      const data = {};
      data.name = name;
      data.email = email;
      data.content = message;
      const sendMail = firebase.functions().httpsCallable("sendMail");
      sendMail(data);
      console.log(data);
    } else {
      console.log("sending failed");
    }
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (
      !validator.isEmpty(name) &&
      !validator.isEmpty(email) &&
      !validator.isEmpty(message)
    ) {
      sendEmail();
    }

    setIsBtnClicked(true);
  };

  return (
    <React.Fragment>
      <section className="contactform-container">
        <h1 className="contactform-title">Get in touch</h1>
        {isInvalid &&
          isBtnClicked &&
          errMessages.map((message, index) => (
            <p className="error-message" key={index}>
              {message}
            </p>
          ))}
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={(e) => onFormSubmit(e)}
        >
          <div className="form-wrap">
            <TextField
              className={classes.textInput}
              id="text"
              label="Name"
              variant="outlined"
              type="text"
              onChange={(e) => validateName(e.target.value)}
            />
            <TextField
              className={classes.textInput}
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              onChange={(e) => validateEmail(e.target.value)}
            />
          </div>
          <TextField
            className={classes.textArea}
            id="text"
            label="Message"
            placeholder="Placeholder"
            multiline
            variant="outlined"
            type="text"
            rows={10}
            onChange={(e) => validateMessage(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
            disabled={
              name.length !== 0 && email.length !== 0 && message.length !== 0
                ? false
                : true
            }
          >
            SUBMIT
          </Button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default ContactForm;
