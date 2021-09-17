import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { startSetAccounts } from "../../../actions/otherAccounts";
import FilteredProfile from "./filteredProfile";
import LoadingPage from "../../LoadingPage";

export const Filter3 = (props) => {
  const [filteredAccounts, setFilteredAccounts] = useState([]);
  const [filteredAccountsByName, setFilteredAccountsByName] = useState([]);
  const otherAccounts = useSelector((state) => state.otherAccounts);

  console.log("otherAccounts", otherAccounts);

  const getFilteredAccountsByName = () => {
    let filteredArray = [];
    otherAccounts.map((user) => {
      if (user.isFiltered) {
        filteredArray.push(user);
        setFilteredAccountsByName(filteredArray);
      }
    });
  };

  useEffect(() => {
    getFilteredAccountsByName();
  }, []);
  console.log("filteredAccountsByName", filteredAccountsByName);

  console.log("filteredAccounts", filteredAccounts);

  const filterAccountsByGenres = () => {
    const selectedGenres = JSON.parse(sessionStorage.getItem("selectedGenres"));
    let filteredAccountsTempList = [];
    for (let i = 0; i < selectedGenres.length; i++) {
      const accountsMatchPrimaryGenre = props.otherAccounts.filter(
        (account) =>
          account.profile.primaryGenre === selectedGenres[i] &&
          // remove exact duplicates ↓
          !filteredAccountsTempList.includes(account)
      );
      const accountsMatchSecondaryGenre = props.otherAccounts.filter(
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
          filteredAccounts.length === 0 &&
          filteredAccountsByName.length === 0 ? (
            <div>
              <span>No users</span>
            </div>
          ) : filteredAccounts.length > 0 ? (
            filteredAccounts.map((account) => {
              return (
                <FilteredProfile
                  key={account.id}
                  id={account.id}
                  profile={account.profile}
                />
              );
            })
          ) : (
            filteredAccountsByName.map((account) => {
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
  };
};

const mapDispatchToProps = (dispatch) => ({
  startSetAccounts: () => dispatch(startSetAccounts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter3);
