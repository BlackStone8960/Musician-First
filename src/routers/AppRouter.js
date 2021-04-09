import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
// import DashboardPage from '../components/DashboardPage';
import Filter1 from '../components/Filter1';
import Filter2 from '../components/Filter2';
import Filter3 from '../components/Filter3';
import Filter4 from '../components/Filter4';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
			<Switch>
				<PublicRoute path="/" component={LoginPage} exact={true} />
				<PublicRoute path="/filter1" component={Filter1} />
				<PublicRoute path="/filter2" component={Filter2} />
				<PublicRoute path="/filter3" component={Filter3} />
				<PublicRoute path="/filter4/:id" component={Filter4} />
				{/* <PrivateRoute path="/filter1" component={Filter1} />
				<PrivateRoute path="/filter2" component={Filter2} /> */}
                {/* <PrivateRoute path="/dashboard" component={DashboardPage} /> */}
                <Route component={NotFoundPage} />
            </Switch>
        </div>		
    </Router>
);

export default AppRouter;