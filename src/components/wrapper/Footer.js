import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();

  return (
    <footer className="footer">
      {history.location.pathname === "/privacy-policy" ||
      history.location.pathname === "/terms-and-conditions" ? (
        <React.Fragment></React.Fragment>
      ) : (
        <React.Fragment>
          <Link to="/privacy-policy" className="footer__link">
            Privacy Policy
          </Link>
          <span>/</span>
          <Link to="/terms-and-conditions" className="footer__link">
            Terms & Conditions
          </Link>
        </React.Fragment>
      )}
    </footer>
  );
};

export default Footer;
