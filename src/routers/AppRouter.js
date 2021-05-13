import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Filter1 from '../components/Filter1';
import Filter2 from '../components/Filter2';
import Filter3 from '../components/Filter3';
import Filter4 from '../components/Filter4';
import EditProfile from '../components/EditProfile';
import NotFoundPage from '../components/NotFoundPage';
import TopPage from '../components/TopPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import FlatRoute from './FlatRoute';
import SignUp from '../components/SignUp';
import LoginPage from '../components/LoginPage';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<PublicRoute path="/" component={TopPage} exact={true} />
				{/* <PrivateRoute path="/top" component={TopPage} /> */}
				<PublicRoute path="/login" component={LoginPage} />
				<FlatRoute path="/signup" component={SignUp} />
				<FlatRoute path="/filter1" component={Filter1} />
				<FlatRoute path="/filter2" component={Filter2} />
				<FlatRoute path="/filter3" component={Filter3} />
				<FlatRoute path="/filter4/:id" component={Filter4} />
				<PrivateRoute path="/profile" component={EditProfile} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>		
	</Router>
);

export { AppRouter as default };