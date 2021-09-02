import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { startSetAccounts } from "../../../actions/otherAccounts";
import FilteredProfile from "./filteredProfile";
import LoadingPage from "../../LoadingPage";

export const Filter3 = (props) => {
  console.log(props.selectedGenres);
  console.log(props.otherAccounts);
  const [filteredAccounts, setFilteredAccounts] = useState([]);
  console.log(filteredAccounts);

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

    // remove duplicate

    console.log(filteredAccountsTempList);
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
      <div className="filter-wrapper--center">
        {props.otherAccounts ? (
          filteredAccounts.length === 0 ? (
            <div>
              <span>No users</span>
            </div>
          ) : (
            filteredAccounts.map((account, index) => {
              return (
                <FilteredProfile
                  key={index}
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
