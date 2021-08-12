import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { startLogout } from "../../actions/auth";
import { useHistory } from "react-router-dom";

export const Header = ({ startLogout, isAuthenticated }) => {
  const history = useHistory();

  return (
    <header className="header">
      {history.location.pathname === "/privacy-policy" ||
      history.location.pathname === "/terms-and-conditions" ? (
        <React.Fragment>
          <div className="logo-wrapper">
            <Link to="/">
              <img
                src="/images/Logo_1.png"
                alt="logo"
                className="header-logo"
              ></img>
            </Link>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="logo-wrapper">
            <Link to="/">
              <img
                src="/images/Logo_1.png"
                alt="logo"
                className="header-logo"
              ></img>
            </Link>
          </div>
          <Link to="/">
            <h1 className="header__title">Musician First</h1>
          </Link>
          <div className="header-rightside">
            {isAuthenticated && (
              <div className="logout" onClick={startLogout}>
                <span>Logout</span>
              </div>
            )}
            <Link to="/profile">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="awesomeIcon icon-user-circle"
              />
            </Link>
            <div className="header__contact button">
              <Link className="button-anchor" to="/">
                Contact
              </Link>
            </div>
          </div>
        </React.Fragment>
      )}
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
