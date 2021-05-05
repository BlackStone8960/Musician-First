import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { startSetAccounts } from '../actions/accounts';
import FilteredProfile from './filteredProfile';
import LoadingPage from './LoadingPage';

export const Filter3 = (props) => {
  // useEffect(() => {
  //   props.startSetAccounts();
  // }, [])

  return (
    <section className="main">
      <div className="main__wrapper">
        <p className="filter-topmassage">
          We’ve found the best matches for your sound.
          Select any picture to learn more about them.
        </p>
        <div className="filter-wrapper">
          {
            props.accounts ? (
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
    accounts: state.accounts
  };
}

const mapDispatchToProps = (dispatch) => ({
  startSetAccounts: () => dispatch(startSetAccounts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter3);