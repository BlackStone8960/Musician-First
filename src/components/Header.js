import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
	<header className="header">
		<div className="logo-wrapper">LOGO</div>
		<Link to="/">
			<h1 className="header__title">Musician First</h1>
		</Link>
		<div className="header-rightside">
			<Link to="">
				<FontAwesomeIcon icon={faUserCircle} className="awesomeIcon icon-user-circle"/>
			</Link>
			<div className="header__contact button">
				<Link className="button-anchor" to="/">
					Contact
				</Link>
			</div>
		</div>
	</header>

	// <header className="header">
	// 	<div className="content-container">
	// 		<div className="header__container">
	// 			<Link className="header__title" to="/dashboard">
	// 				<h1>Boilerplate</h1>
	// 			</Link>
	// 			<button className="button button--link" onClick={startLogout}>Logout</button>
	// 		</div>
	// 	</div>
	// </header>
);

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);