import React from 'react';
import { Link } from 'react-router-dom';

class Filter2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectCount: 0,
      clicked: false
    }
  }

  onSelect = (e) => {
    if (this.state.clicked === false && this.state.selectCount < 3) {
      this.setState((prevState) => {
        return {
          selectCount: prevState.selectCount + 1
        }
      });
    } else if (this.state.clicked === true && this.state.selectCount > 0) {
      const selectCount = this.state.selectCount--;
      this.setState(() => ({ selectCount }));
    }
  }

  render() {
    return (
      <React.Fragment>
        <p className="filter-topmassage">
          Let’s get specific. Pick at least three styles that represent your project.<br></br>
          You will be matched by someone who understands these specific vibes.
        </p>
        <div className="filter-wrapper">
          <div className={[
            "button",
            "button--filter2",
            // this.state.clicked ? "clicked" : null
          ].join(' ')} onClick={this.onSelect}>
            <div className="button-anchor">Rock</div>
          </div>
          <div className={[
            "button",
            "button--filter2",
            // this.state.clicked ? "clicked" : null
          ].join(' ')} onClick={this.onSelect}>
            <div className="button-anchor">Alternative</div>
          </div>
          <div className={[
            "button",
            "button--filter2",
            // this.state.clicked ? "clicked" : null
          ].join(' ')} onClick={this.onSelect}>
            <div className="button-anchor">Hip Hop/Rap</div>
          </div>
          <div className={[
            "button",
            "button--filter2",
            // this.state.clicked ? "clicked" : null
          ].join(' ')} onClick={this.onSelect}>
            <div className="button-anchor">Metal</div>
          </div>
          <div className={[
            "button",
            "button--filter2",
            // this.state.clicked ? "clicked" : null
          ].join(' ')} onClick={this.onSelect}>
            <div className="button-anchor">Punk</div>
          </div>
          <div className={[
            "button",
            "button--filter2",
            // this.state.clicked ? "clicked" : null
          ].join(' ')} onClick={this.onSelect}>
            <div className="button-anchor">Progressive Rock</div>
          </div>
          <div className={[
            "button",
            "button--filter2",
            // this.state.clicked ? "clicked" : null
          ].join(' ')} onClick={this.onSelect}>
            <div className="button-anchor">Indie Rock</div>
          </div>            
        </div>
        <div className="button findcollaborator">
          {
            this.state.selectCount > 0 ? (
              <Link className="button-anchor" to="/filter3">
                Find my collaborator
              </Link> ) : (
              <div className="button-anchor unactive">
                Find my collaborator
              </div>
            )
          }
          
        </div>
        <p className="filter-bottommassage">
          Didn’t find your style? Just search here and we may have exactly what you are looking for.
        </p>
        <input className="genreSearch" type="text" placeholder="Type Link genre"></input>
      </React.Fragment>
    )
  }
};

export default Filter2;