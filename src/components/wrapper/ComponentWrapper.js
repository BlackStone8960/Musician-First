import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollTop from "../../components/functionalities/ScrollTop";

const ComponentWrapper = ({ children }) => (
  <div>
    <Header />
    <ScrollTop />
    <section className="main">
      <div className="main__wrapper">{children}</div>
    </section>
    <Footer />
  </div>
);

export default ComponentWrapper;
