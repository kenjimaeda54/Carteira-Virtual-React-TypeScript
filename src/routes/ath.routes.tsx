import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../pages/sign-in';

const AthRoutes: React.FC = () => {
  return (
    <Switch>
      <Route component={SignIn} />
    </Switch>
  );
};
export default AthRoutes;
