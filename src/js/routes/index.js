import React from 'react';
import { Switch, Route } from 'react-router';
import { Home, Login } from 'containers';

export default function getRoutes() {
  return (
    <Switch>
      <Route exact path='/' component={ Login } />
    </Switch>
  );
}
