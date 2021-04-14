import React from 'react';
import { connect } from 'react-redux';

export const Filter4 = (props) => (
  <section className="main">
    <div className="main__wrapper">
      <div className="name-bio">
        <span>{props.accounts.name}</span>
        <span>{`${props.accounts.job} Bio`}</span>
      </div>
      <div className="picture-bio">
        <img src="/images/Ollie.png"></img>
        <div className="bio-box">
          <div className="bio-sentence">{props.accounts.introduction}</div>
        </div>
      </div>
      <div className="button-wrapper">
        <div className="button button-anchor button--black">Schedule a free Zoom call</div>
        <div className="button button-anchor button--black">Hire Now</div>
      </div>
      <div className="music-box">
        <p className="player-title">Music Player</p>
        <div>Song 1</div>
        <div>Song 2</div>
        <div>Song 3</div>
      </div>
    </div>
  </section>  
);

const mapStateToProps = (state, props) => {
  return {
    accounts: state.accounts.find((account) => account.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(Filter4);