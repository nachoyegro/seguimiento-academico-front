import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Estadisticas from '../pages/Estadisticas';
import Login from '../pages/Login';
import AuthenticationRequired from '../components/AuthenticationRequired';
import BaseContainer from '../containers/BaseContainer'

const Router = () => (
    <BrowserRouter>
        <Switch>
          <BaseContainer>
            <Route exact path="/login" component={Login}/>
            <AuthenticationRequired>
                <Route exact path="/estadisticas" component={Estadisticas}/>
            </AuthenticationRequired>
          </BaseContainer>
        </Switch>
    </BrowserRouter>
)

export default Router;