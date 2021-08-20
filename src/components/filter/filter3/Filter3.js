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
    let filteredAccountsTempList = [];
    for (let i = 0; i < props.selectedGenres.length; i++) {
      const accountsMatchPrimaryGenre = props.otherAccounts.filter(
        (account) => account.profile.primaryGenre === props.selectedGenres[i]
      );
      const accountsMatchSecondaryGenre = props.otherAccounts.filter(
        (account) => account.profile.secondaryGenre === props.selectedGenres[i]
      );
      filteredAccountsTempList = [
        ...filteredAccountsTempList,
        ...accountsMatchPrimaryGenre,
        ...accountsMatchSecondaryGenre,
      ];
      console.log(accountsMatchPrimaryGenre, accountsMatchSecondaryGenre);
    }
    console.log(filteredAccountsTempList);
    setFilteredAccounts(filteredAccountsTempList);
  };

  useEffect(() => {
    if (props.otherAccounts && props.selectedGenres) filterAccountsByGenres();
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
