import React from 'react';
import { Link } from 'react-router-dom';

const SentMail = () => (
  <div className="center-text">
    <p>Have sent email!</p>
    <Link to="/filter1">
      <button className="button--config">Back to Top</button>
    </Link>
  </div>
);

export default SentMail;