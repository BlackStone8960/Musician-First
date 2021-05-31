import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import ComponentWrapper from '../components/wrapper/ComponentWrapper';

export const PublicRoute = ({
  isAuthenticated, 
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <Redirect to="/filter1" />
    ) : (
      <ComponentWrapper>
        <Component {...props} />
      </ComponentWrapper>
    )
  )} />
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);