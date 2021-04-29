import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
// import DashboardPage from '../components/DashboardPage';
import Filter1 from '../components/Filter1';
import Filter2 from '../components/Filter2';
import Filter3 from '../components/Filter3';
import Filter4 from '../components/Filter4';
import EditAccount from '../components/EditAccount';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import FlatRoute from './FlatRoute';
import SignUp from '../components/SignUp';
import { connect } from 'react-redux';
import { startSetAccounts } from '../actions/accounts';

export const history = createHistory();

export const AppRouter = (props) => {
	useEffect(() => {
		history.listen((location, action)=> {
			props.startSetAccounts();
		})
	}, []);

	return (
		<Router history={history}>
			<div>
				<Switch>
					<PublicRoute path="/" component={LoginPage} exact={true} />
					<PrivateRoute path="/top" component={LoginPage} />
					<FlatRoute path="/signup" component={SignUp} />
					{/* <PrivateRoute path="/dashboard" component={DashboardPage} /> */}
					<FlatRoute path="/filter1" component={Filter1} />
					<FlatRoute path="/filter2" component={Filter2} />
					<FlatRoute path="/filter3" component={Filter3} />
					<FlatRoute path="/filter4/:id" component={Filter4} />
					<PrivateRoute path="/editaccount" component={EditAccount} />
					<Route component={NotFoundPage} />
				</Switch>
			</div>		
		</Router>
	)
};

const mapDispatchToProps = (dispatch) => ({
	startSetAccounts: () => dispatch(startSetAccounts())
})

export default connect(undefined, mapDispatchToProps)(AppRouter);