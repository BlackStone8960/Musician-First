import React from 'react';
import database from '../firebase/firebase';
import FilteredProfile from './filteredProfile';

class Filter3 extends React.Component {
  constructor(props) {
    super(props);
    this.userDatum = []; // Manage user datum at the Store in the future

    database.ref('userData')
    .on('value', (snapshot) => {      
      snapshot.forEach((childSnapshot) => {
        this.userDatum.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      });
      console.log(this.userDatum);
    }); 
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
              this.userDatum.length === 0 ? (
                <div>
                  <span>No users</span>
                </div>
              ) : (
                this.userDatum.map((data) => {
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