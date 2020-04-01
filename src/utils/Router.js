import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EstadisticasMateriaPage from '../pages/EstadisticasMateriaPage';
import EstadisticasAlumnoPage from '../pages/EstadisticasAlumnoPage';
import EstadisticasCarreraPage from '../pages/EstadisticasCarreraPage';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import HomePage from '../pages/HomePage';
import { ProtectedRoute } from './ProtectedRoute';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={HomePage} />
      <ProtectedRoute exact path="/estadisticas-materia" component={EstadisticasMateriaPage} />
      <ProtectedRoute exact path="/estadisticas-alumno" component={EstadisticasAlumnoPage} />
      <ProtectedRoute exact path="/estadisticas-carrera" component={EstadisticasCarreraPage} />
      <ProtectedRoute exact path="/logout" component={Logout} />
    </Switch>
  </BrowserRouter>
)

export default Router;