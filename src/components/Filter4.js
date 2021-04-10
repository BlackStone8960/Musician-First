import React from 'react';
import { Link } from 'react-router-dom';
import database from '../firebase/firebase';
import userDatum from '../app';

class Filter4 extends React.Component {
  constructor(props) {
    super(props);
    this.matchedData = userDatum.find((data) => data.id === this.props.match.params.id)
  }

  render() {
    return (
      <section className="main">
        <div className="main__wrapper">
          <div className="name-bio">
            <span>{this.matchedData.name}</span>
            <span>{`${this.matchedData.job} Bio`}</span>
          </div>
          <div className="picture-bio">
            <img src="/images/Ollie.png"></img>
            <div className="bio-box">
              <div className="bio-sentence">{this.matchedData.introduction}</div>
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
    )
  }
};

export default Filter4;