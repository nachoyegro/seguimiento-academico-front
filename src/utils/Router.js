import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Estadisticas from '../pages/Estadisticas';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import { ProtectedRoute } from './ProtectedRoute';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/estadisticas" component={Estadisticas} />
      <ProtectedRoute exact path="/logout" component={Logout} />
    </Switch>
  </BrowserRouter>
)

export default Router;