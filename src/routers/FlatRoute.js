import React from 'react';
import { Route } from 'react-router-dom';
import ComponentWrapper from '../components/wrapper/ComponentWrapper';

const FlatRoute = ({ 
  component: Component,
  ...rest 
}) => (
  <Route {...rest} component={(props) => (
    <ComponentWrapper>
      <Component {...props} />
    </ComponentWrapper>
  )} />
);

export default FlatRoute;