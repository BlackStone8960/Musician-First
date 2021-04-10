import React from 'react';
import database from '../firebase/firebase';
import FilteredProfile from './filteredProfile';
import userDatum from '../app';

class Filter3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="main">
        <div className="main__wrapper">
          <p className="filter-topmassage">
            We’ve found the best matches for your sound.
            Select any picture to learn more about them.
          </p>
          <div className="filter-wrapper">
          {
            userDatum.length === 0 ? (
              <div>
                <span>No users</span>
              </div>
            ) : (
              userDatum.map((data) => {
                return (
                  <FilteredProfile key={data.id} {...data} />
                )
              })
            )
          }
          </div>
        </div>
      </section>  
    )
  }
};

export default Filter3;