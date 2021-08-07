import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <Link to="/privacy-policy" className="footer__link">Privacy Policy</Link>
    <span>/</span>
    <Link to="/terms-and-conditions" className="footer__link">Terms & Conditions</Link>
  </footer>
)

export default Footer;