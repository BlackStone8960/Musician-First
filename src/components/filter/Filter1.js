import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

export const setFilterOtherAccount = (others, inputName) => ({
  type: "FILTER_OTHER_ACCOUNT",
  others,
  inputName,
});

const Filter1 = () => {
  const [inputName, setInputName] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector((state) => state.otherAccounts);
  console.log("users", users);

  // 下記Useeffect, Filter3からトップページに戻った時もsessionStorage中身リセットしたいので書いてる
  // （Filter2経由せずにFilter3行ってしまった時に前回の結果表示を防ぐため）
  useEffect(() => {
    if (sessionStorage.hasOwnProperty("selectedGenres")) {
      sessionStorage.removeItem("selectedGenres");
    }
  }, []);

  const searchUsersHandler = () => {
    // users.filter((user) => {
    //   if (
    //     inputName.includes(user.profile.firstName) ||
    //     inputName.includes(user.profile.lastName)
    //   ) {
    //     dispatch(setFilterOtherAccount(user));
    //     history.push("/filter3");
    //   }
    // });
    dispatch(setFilterOtherAccount(users, inputName));
    history.push("/filter3");
  };

  return (
    <React.Fragment>
      <p className="filter-topmassage">
        Select from these four general categories.<br></br>
        This is just to get a broad idea of what you are going for.
      </p>
      <div className="filter-wrapper">
        <div className="filter1-container">
          <div className="button button--filter1">
            <Link className="button-anchor" to="/filter2/edgy">
              Edgy
            </Link>
          </div>
          <p className="filter1-discription">
            Is your music dangerous, sharp, and always standing out from the
            pack? Do you try to make a bold statement, and love to hear loud,
            exciting sounds? Rebels take heed, this is where rock, punk, metal,
            and the heavier side of music is found.
          </p>
        </div>
        <div className="filter1-container">
          <div className="button button--filter1">
            <Link className="button-anchor" to="/filter2/traditional">
              Traditional
            </Link>
          </div>
          <p className="filter1-discription">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
            quisquam vitae animi consectetur, sunt id labore sit officiis harum
            ex quo omnis obcaecati libero amet ad ut. Suscipit, recusandae
            magnam.
          </p>
        </div>
        <div className="filter1-container">
          <div className="button button--filter1">
            <Link className="button-anchor" to="/filter2/chill">
              Chill
            </Link>
          </div>
          <p className="filter1-discription">
            If radio was still the most popular place to listen to music, this
            is where you would want your beautiful, vocal driven, emotion based
            music to soar and be found. Chill music can be found in genres such
            as folk, jazz, singersongwriter, and many, many more.
          </p>
        </div>
        <div className="filter1-container">
          <div className="button button--filter1">
            <Link className="button-anchor" to="/filter2/dancedriven">
              Dance Driven
            </Link>
          </div>
          <p className="filter1-discription">
            Far out This is self explanatory, but when your main goal in life is
            to get people to storm the dance floor and live their fantasy, then
            this your vibe. Tons of styles of music can be found here, such as
            electronic pop, RnB, Drum n Bass, Trap, and more.
          </p>
        </div>
        <div className="filter1-container">
          <div className="button button--filter1">
            <Link className="button-anchor" to="/filter2/farout">
              Far Out
            </Link>
          </div>
          <p className="filter1-discription">
            Rules in music? Pfft, as if. Genre is just a 5 letter word, and you
            desire to make something that really challenges the listener,
            whether it’s a 25 minute spoken word poem played on a midi
            saxophone, or something that you cooked up in that basement
            laboratory of yours.
          </p>
        </div>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            searchUsersHandler();
          }}
        >
          <input
            type="text"
            placeholder="search by the artist name"
            onChange={(e) => {
              setInputName(e.target.value);
            }}
          />
        </form>
      </div>
    </React.Fragment>
  );
};

export default Filter1;
