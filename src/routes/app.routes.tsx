import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GridLayout from '../components/layout';
import Dashboard from '../pages/dashboard';
import List from '../pages/list';

const App: React.FC = () => {
  return (
    <GridLayout>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        /* esse /:type vou receber como props de navegação */
        <Route exact path="/list/:type" component={List} />
      </Switch>
    </GridLayout>
  );
};
export default App;
