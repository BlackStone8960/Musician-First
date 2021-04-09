import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { Link } from 'react-router-dom';

export const LoginPage = ({ startLogin }) => (
  <section className="main">
    <div className="main__wrapper">
      <div className="main__topbuttons">
        <div className="button">
          <Link className="button-anchor" to="/filter1">
            Start
          </Link>
        </div>
        <div className="button">
          <div className="button-anchor" onClick={startLogin}>
            Log in
          </div>
        </div>
      </div>
      <div className="main__video">
        <video src="/video/MF Explainer Video.mp4" autoPlay controls muted loop playsInline></video>
      </div>
      <div className="main__whatwedo">
        <p className="main__whatwedo__paragraph">We connect musicians to producers, engineers, instrumentalists, and vocalists for hire through our curated database.</p>
        <p className="main__whatwedo__paragraph">Utilizing our unique music filtering system, we find the best musical match for your specific project goals.</p>
        <p className="main__whatwedo__paragraph">Secure payments are only processed once both parties confirm project completed - see detailed terms here. </p>
        <p className="main__whatwedo__paragraph">Simple, Safe, and Super fun to use. Musician First puts you, the artist, back in the driving seat. Hit the start button above to begin your musical adventure with us.</p>
      </div>
      <div className="main__testimonials">
        <div className="testimonial">
          <img src="/images/user_1.jpg" alt="testimonial-user"></img>
          <div className="testimonial__comment">This was the best! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis fuga impedit explicabo maxime.</div>
        </div>
        <div className="testimonial">
          <img src="/images/user_2.jpg" alt="testimonial-user"></img>
          <div className="testimonial__comment">I love musician first! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis fuga impedit explicabo maxime.</div>
        </div>
      </div>
    </div>
  </section>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);