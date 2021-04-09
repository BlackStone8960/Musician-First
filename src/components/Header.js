import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
	<header className="header">
		<div className="logo-wrapper">LOGO</div>
		<h1 className="header__title">Musician First</h1>
		<div className="header__contact button">
			<Link className="button-anchor" to="/">
				Contact
			</Link>
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