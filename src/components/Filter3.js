import React from 'react';
import { connect } from 'react-redux';
import FilteredProfile from './filteredProfile';

export const Filter3 = (props) => (
  <section className="main">
    <div className="main__wrapper">
      <p className="filter-topmassage">
        We’ve found the best matches for your sound.
        Select any picture to learn more about them.
      </p>
      <div className="filter-wrapper">
      {
        props.accounts.length === 0 ? (
          <div>
            <span>No users</span>
          </div>
        ) : (
          props.accounts.map((account) => {
            return (
              <FilteredProfile key={account.id} id={account.id} profile={account.profile} />
            )
          })
        )
      }
      </div>
    </div>
  </section>  
);

const mapStateToProps = (state) => {
  // implement filter function later
  return {
    accounts: state.accounts
  };
}

export default connect(mapStateToProps)(Filter3);