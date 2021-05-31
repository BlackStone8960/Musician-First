import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import ComponentWrapper from '../components/wrapper/ComponentWrapper';

export const PrivateRoute = ({
  isAuthenticated, 
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <ComponentWrapper>
        <Component {...props} />
      </ComponentWrapper>
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);