import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import EmailIcon from '@material-ui/icons/Email';
import { connect } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const Header = ({ startLogout, isAuthenticated }) => (
	<header className="header">
		<div className="logo-wrapper">
			<Link to="/">
				<img src="/images/Logo_1.png" alt="logo" className="header-logo"></img>
			</Link>
		</div>
		<Link to="/">
			<h1 className="header__title">Musician First</h1>
		</Link>
		<div className="header-rightside">
			{
				isAuthenticated && (
					<React.Fragment>
						<div className="logout" onClick={startLogout}>
							<span>Logout</span>
						</div>
						<Link to="/profile">
							<FontAwesomeIcon icon={faUserCircle} className="awesomeIcon icon-user-circle" />
						</Link>
						<Link to="/messages">
							<EmailIcon />
						</Link>
					</React.Fragment>
				)
			}
		</div>
	</header>
);

const mapStateToProps = (state) => ({
	isAuthenticated: !!state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);