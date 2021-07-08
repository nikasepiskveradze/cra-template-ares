import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as routes from '../../constants/routes';

const PublicRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const currentUser = authenticationService.currentUserValue;
      if (currentUser) {
        return (
          <Redirect
            to={{ pathname: routes.ROOT, state: { from: props.location } }}
          />
        );
      }

      // authorised so return component
      return <Component {...props} />;
    }}
  />
);

export default PublicRoute;
