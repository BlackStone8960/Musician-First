import React from 'react';
import { connect } from 'react-redux';
import { startSetAccounts } from '../../../actions/otherAccounts';
import FilteredProfile from './filteredProfile';
import LoadingPage from '../../LoadingPage';

export const Filter3 = (props) => {
  return (
    <section className="main">
      <div className="main__wrapper">
        <p className="filter-topmassage">
          We’ve found the best matches for your sound.
          Select any picture to learn more about them.
        </p>
        <div className="filter-wrapper">
          {
            props.otherAccounts ? (
              props.otherAccounts.length === 0 ? (
                <div>
                  <span>No users</span>
                </div>
              ) : (
                props.otherAccounts.map((account) => {
                  return (
                    <FilteredProfile key={account.id} id={account.id} profile={account.profile} />
                  )
                })
              )
            ) : ( 
              <LoadingPage />
            )
          }
        </div>
      </div>
    </section>  
  )
};

const mapStateToProps = (state) => {
  // implement filter function later
  return {
    otherAccounts: state.otherAccounts
  };
}

const mapDispatchToProps = (dispatch) => ({
  startSetAccounts: () => dispatch(startSetAccounts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter3);