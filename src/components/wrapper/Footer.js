import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <Link to="/privacy-policy">Privacy Policy</Link>
    <Link to="/terms-and-conditions">Terms & Conditions</Link>
  </footer>
)

export default Footer;