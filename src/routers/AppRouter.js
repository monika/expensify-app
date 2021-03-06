import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ExpensiftyDashboardPage from '../components/ExpensifyDashboardPage';
import CreateExpensePage from '../components/CreateExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

import Header from '../components/Header';

const AppRouter = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpensiftyDashboardPage} exact={true} />
        <Route path="/create" component={CreateExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
