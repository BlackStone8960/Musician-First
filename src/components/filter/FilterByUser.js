import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

export const setFilterOtherAccount = (others, inputName) => ({
  type: "FILTER_OTHER_ACCOUNT",
  others,
  inputName,
});

export const setInitializeFilteredAccount = (others) => ({
  type: "INITIALIZE_FILTERED_ACCOUNT",
  others,
});

const FilterByUser = () => {
  const [inputName, setInputName] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector((state) => state.otherAccounts);

  const searchUsersHandler = () => {
    if (inputName.trim() === "") return;

    users.filter((user) => {
      if (
        user.profile.firstName
          .toLowerCase()
          .includes(inputName.toLowerCase()) ||
        user.profile.lastName.toLowerCase().includes(inputName.toLowerCase())
      ) {
        dispatch(setFilterOtherAccount(users, inputName));
      }
    });
    history.push("/filter3");
  };

  const resetFilteredUsersHandler = () => {
    dispatch(setInitializeFilteredAccount(users));
  };

  return (
    <React.Fragment>
      <div className="filter-input-wrappter">
        <form
          className="filter-form"
          onSubmit={(e) => {
            e.preventDefault();
            searchUsersHandler();
          }}
        >
          <input
            className="filter-input"
            type="text"
            placeholder="search by the musician name"
            onChange={(e) => {
              setInputName(e.target.value);
              resetFilteredUsersHandler();
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              searchUsersHandler();
            }}
          >
            Search
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default FilterByUser;
