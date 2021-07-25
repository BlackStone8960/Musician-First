import React from 'react';
import { Link } from 'react-router-dom';

class Filter2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectCount: 0,
      clicked: [
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ]
    }
  }

  onSelect = (index) => {
    if (this.state.clicked[index] && this.state.selectCount > 0) {
      console.log("to false")
      this.state.clicked.splice(index, 1, !this.state.clicked[index])
      this.setState((prevState) => {
        return {
          selectCount: prevState.selectCount - 1,
          clicked: this.state.clicked
        }
      })
    } else if (!this.state.clicked[index] && this.state.selectCount < 3) {
      console.log("to true")
      this.state.clicked.splice(index, 1, !this.state.clicked[index])
      this.setState((prevState) => {
        return {
          selectCount: this.state.clicked[index] ? prevState.selectCount + 1 : prevState.selectCount - 1,
          clicked: this.state.clicked
        }
      })
    }
  }

  render() {
    console.log(this.state.selectCount, this.state.clicked);
    return (
      <React.Fragment >
        <p className="filter-topmassage">
          Let’s get specific. Pick at least three styles that represent your project.<br></br>
          You will be matched by someone who understands these specific vibes.
        </p>
        <div className="filter-wrapper">
          <div className={[
            "button",
            "button--filter2",
            this.state.clicked[0] ? "clicked" : null
          ].join(' ')} onClick={() => this.onSelect(0)}>
            <div className="button-anchor">Rock</div>
          </div>
          <div className={[
            "button",
            "button--filter2",
            this.state.clicked[1] ? "clicked" : null
          ].join(' ')} onClick={() => this.onSelect(1)}>
            <div className="button-anchor">Alternative</div>
          </div>
          <div className={[
            "button",
            "button--filter2",
            this.state.clicked[2] ? "clicked" : null
          ].join(' ')} onClick={() => this.onSelect(2)}>
            <div className="button-anchor">Hip Hop/Rap</div>
          </div>
          <div className={[
            "button",
            "button--filter2",
            this.state.clicked[3] ? "clicked" : null
          ].join(' ')} onClick={() => this.onSelect(3)}>
            <div className="button-anchor">Metal</div>
          </div>
          <div className={[
            "button",
            "button--filter2",
            this.state.clicked[4] ? "clicked" : null
          ].join(' ')} onClick={() => this.onSelect(4)}>
            <div className="button-anchor">Punk</div>
          </div>
          <div className={[
            "button",
            "button--filter2",
            this.state.clicked[5] ? "clicked" : null
          ].join(' ')} onClick={() => this.onSelect(5)}>
            <div className="button-anchor">Progressive Rock</div>
          </div>
          <div className={[
            "button",
            "button--filter2",
            this.state.clicked[6] ? "clicked" : null
          ].join(' ')} onClick={() => this.onSelect(6)}>
            <div className="button-anchor">Indie Rock</div>
          </div>
        </div>
        <div className="button findcollaborator">
          {
            this.state.selectCount > 0 ? (
              <Link className="button-anchor" to="/filter3">
                Find my collaborator
              </Link>) : (
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
      </React.Fragment >
    )
  }
};

export default Filter2;