import React from 'react';
import Header from './Header';
import Footer from './Footer';

const ComponentWrapper = ({ children }) => (
  <div>
    <Header />
    <section className="main">
      <div className="main__wrapper">
        {children}
      </div>
    </section>
    <Footer />
  </div>
);

export default ComponentWrapper;