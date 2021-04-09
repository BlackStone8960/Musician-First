import React from 'react';
import { Link } from 'react-router-dom';

const Filter2 = () => (
  <section className="main">
    <div className="main__wrapper">
      <p className="filter-topmassage">
        Let’s get specific. Pick at least three styles that represent your project.<br></br>
        You will be matched by someone who understands these specific vibes.
      </p>
      <div className="filter-wrapper">
        <div className="button button--filter2">
          <div className="button-anchor">Rock</div>
        </div>
        <div className="button button--filter2">
          <div className="button-anchor">Rock</div>
        </div>
        <div className="button button--filter2">
          <div className="button-anchor">Rock</div>
        </div>
        <div className="button button--filter2">
          <div className="button-anchor">Rock</div>
        </div>
        <div className="button button--filter2">
          <div className="button-anchor">Rock</div>
        </div>
        <div className="button button--filter2">
          <div className="button-anchor">Rock</div>
        </div>
        <div className="button button--filter2">
          <div className="button-anchor">Rock</div>
        </div>
        <div className="button button--filter2">
          <div className="button-anchor">Rock</div>
        </div>
        <div className="button button--filter2">
          <div className="button-anchor">Rock</div>
        </div>
        <div className="button button--filter2">
          <div className="button-anchor">Rock</div>
        </div>
        <div className="button button--filter2">
          <div className="button-anchor">Rock</div>
        </div>
        <div className="button button--filter2">
          <div className="button-anchor">Rock</div>
        </div>
        <div className="button button--filter2">
          <div className="button-anchor">Rock</div>
        </div>
        <div className="button button--filter2">
          <div className="button-anchor">Rock</div>
        </div>
        <div className="button button--filter2">
          <div className="button-anchor">Rock</div>
        </div>
        <div className="button button--filter2">
          <div className="button-anchor">Rock</div>
        </div>
      </div>
      <div className="button findcollaborator">
        <Link className="button-anchor" to="/filter3">
          Find my collaborator
        </Link>
      </div>
      <p className="filter-bottommassage">
        Didn’t find your style? Just search here and we may have exactly what you are looking for.
      </p>
      <input className="genreSearch" type="text" placeholder="Type Link genre"></input>
    </div>
  </section>
);

export default Filter2;