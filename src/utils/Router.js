import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EstadisticasMateriaPage from '../pages/EstadisticasMateriaPage';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import HomePage from '../pages/HomePage';
import { ProtectedRoute } from './ProtectedRoute';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={HomePage} />
      <ProtectedRoute exact path="/estadisticas" component={EstadisticasMateriaPage} />
      <ProtectedRoute exact path="/logout" component={Logout} />
    </Switch>
  </BrowserRouter>
)

export default Router;