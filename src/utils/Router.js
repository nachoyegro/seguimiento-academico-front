import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Estadisticas from '../pages/Estadisticas';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import BaseContainer from '../containers/BaseContainer'
import { ProtectedRoute } from './ProtectedRoute';

const Router = () => (
    <BrowserRouter>
        <Switch>
          <BaseContainer>
            <Route exact path="/login" component={Login}/>
            <ProtectedRoute exact path="/estadisticas" component={Estadisticas}/>
            <ProtectedRoute exact path="/logout" component={Logout}/>
          </BaseContainer>
        </Switch>
    </BrowserRouter>
)

export default Router;