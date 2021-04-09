import React from 'react';
import { Link } from 'react-router-dom';

const Filter1 = () => (
  <section className="main">
    <div className="main__wrapper">
      <p className="filter-topmassage">
        Select from these four general categories.<br></br>
        This is just to get a broad idea of what you are going for.
      </p>
      <div className="filter-wrapper">
        <div className="filter1-container">
          <div className="button button--filter1">
            <Link className="button-anchor" to="/filter2">Edgy</Link>
          </div>
          <p className="filter1-discription">
            Is your music dangerous, sharp, and always
            standing out from the pack? Do you try to
            make a bold statement, and love to hear loud,
            exciting sounds? Rebels take heed, this is
            where rock, punk, metal, and the heavier side
            of music is found.
          </p>
        </div>
        <div className="filter1-container">
          <div className="button button--filter1">
            <a className="button-anchor">Chill</a>
          </div>
          <p className="filter1-discription">
            If radio was still the most popular place to
            listen to music, this is where you would want
            your beautiful, vocal driven, emotion based
            music to soar and be found. Chill music can
            be found in genres such as folk, jazz, singersongwriter,
            and many, many more.
          </p>
        </div>
        <div className="filter1-container">
          <div className="button button--filter1">
            <a className="button-anchor">Dance Driven</a>
          </div>
          <p className="filter1-discription">
            Far out
            This is self explanatory, but when your main goal
            in life is to get people to storm the dance floor
            and live their fantasy, then this your vibe. Tons of
            styles of music can be found here, such as
            electronic pop, RnB, Drum n Bass, Trap, and
            more.
          </p>
        </div>
        <div className="filter1-container">
          <div className="button button--filter1">
            <a className="button-anchor">Far out</a>
          </div>
          <p className="filter1-discription">
            Rules in music? Pfft, as if. Genre is just a 5
            letter word, and you desire to make something
            that really challenges the listener, whether it’s
            a 25 minute spoken word poem played on a
            midi saxophone, or something that you
            cooked up in that basement laboratory of
            yours.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Filter1;