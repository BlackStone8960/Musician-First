import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { startSetAccounts } from "../../../actions/otherAccounts";
import FilteredProfile from "./filteredProfile";
import LoadingPage from "../../LoadingPage";

export const Filter3 = (props) => {
  const [filteredAccounts, setFilteredAccounts] = useState([]);

  const filterAccountsByGenres = () => {
    const selectedGenres = JSON.parse(sessionStorage.getItem("selectedGenres"));
    let filteredAccountsTempList = [];
    // for (let i = 0; i < props.selectedGenres.length; i++) {
    for (let i = 0; i < selectedGenres.length; i++) {
      const accountsMatchPrimaryGenre = props.otherAccounts.filter(
        // (account) => account.profile.primaryGenre === props.selectedGenres[i]
        (account) =>
          account.profile.primaryGenre === selectedGenres[i] &&
          // remove exact duplicates ↓
          !filteredAccountsTempList.includes(account)
      );
      const accountsMatchSecondaryGenre = props.otherAccounts.filter(
        // (account) => account.profile.secondaryGenre === props.selectedGenres[i]
        (account) =>
          account.profile.secondaryGenre === selectedGenres[i] &&
          !filteredAccountsTempList.includes(account)
      );
      filteredAccountsTempList = [
        ...filteredAccountsTempList,
        ...accountsMatchPrimaryGenre,
        ...accountsMatchSecondaryGenre,
      ];
    }
    setFilteredAccounts(filteredAccountsTempList);
  };

  useEffect(() => {
    // if (props.otherAccounts && props.selectedGenres) filterAccountsByGenres();
    if (sessionStorage.hasOwnProperty("selectedGenres")) {
      filterAccountsByGenres();
    }
  }, []);
  return (
    <React.Fragment>
      <p className="filter-topmassage">
        We’ve found the best matches for your sound. Select any picture to learn
        more about them.
      </p>
      <div className="color-example-container">
        <div className="color-example-wrap">
          <div className="primary-color"></div>
          <div>Primary Genre</div>
        </div>
        <div className="color-example-wrap">
          <div className="secondary-color"></div>
          <div> Secondary Genre</div>
        </div>
      </div>
      <div className="filter-wrapper--center">
        {props.otherAccounts ? (
          filteredAccounts.length === 0 ? (
            <div>
              <span>No users</span>
            </div>
          ) : (
            filteredAccounts.map((account) => {
              return (
                <FilteredProfile
                  key={account.id}
                  id={account.id}
                  profile={account.profile}
                />
              );
            })
          )
        ) : (
          <LoadingPage />
        )}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  // implement filter function later
  return {
    otherAccounts: state.otherAccounts,
    selectedGenres: state.selectedGenres,
  };
};

const mapDispatchToProps = (dispatch) => ({
  startSetAccounts: () => dispatch(startSetAccounts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter3);
