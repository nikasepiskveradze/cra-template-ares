import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as routes from '../../constants/routes';

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const currentUser = authenticationService.currentUserValue;
      if (!currentUser) {
        // not logged in so redirect to login page with the return url
        return (
          <Redirect
            to={{ pathname: routes.LOGIN, state: { from: props.location } }}
          />
        );
      }

      // check if route is restricted by role
      if (roles && roles.indexOf(currentUser.role) === -1) {
        // role not authorised so redirect to home page
        return <Redirect to={{ pathname: routes.ROOT }} />;
      }

      // authorised so return component
      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;
