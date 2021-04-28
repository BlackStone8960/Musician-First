import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
	<header className="header">
		<div className="logo-wrapper">LOGO</div>
		<Link to="/top">
			<h1 className="header__title">Musician First</h1>
		</Link>
		<div className="header-rightside">
			<div className="logout" onClick={startLogout}>
				<span>Logout</span>
			</div>
			<Link to="/signup">
			{/* <Link to="/editaccount"> */}
				<FontAwesomeIcon icon={faUserCircle} className="awesomeIcon icon-user-circle"/>
			</Link>
			<div className="header__contact button">
				<Link className="button-anchor" to="/">
					Contact
				</Link>
			</div>
		</div>
	</header>
);

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);