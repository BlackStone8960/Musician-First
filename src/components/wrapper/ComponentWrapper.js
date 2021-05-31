import React from 'react';
import Header from './Header';

const ComponentWrapper = ({ children }) => (
  <div>
    <Header />
    <section className="main">
      <div className="main__wrapper">
        { children }
      </div>
    </section>
  </div>
);

export default ComponentWrapper;