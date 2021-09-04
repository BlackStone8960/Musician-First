import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
  return (
    <React.Fragment>
      <section className="contactform-container">
        <h1 className="contactform-title">Get in touch</h1>
        <form
          className={(classes.root, "form-wrap")}
          noValidate
          autoComplete="off"
        >
          <TextField
            className="text-input name-input"
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            className="text-input email-input"
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
        </form>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            className="textarea"
            id="outlined-textarea"
            label="Message"
            placeholder="Placeholder"
            multiline
            variant="outlined"
            rows={10}
          />
        </form>
        <Button variant="contained" color="primary" className={classes.button}>
          SUBMIT
        </Button>
      </section>
    </React.Fragment>
  );
};

export default ContactForm;
