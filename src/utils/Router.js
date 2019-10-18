import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Estadisticas from '../pages/Estadisticas';
import Login from '../pages/Login';
import AuthenticationRequired from '../components/AuthenticationRequired';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login}/>
            <AuthenticationRequired>
                <Route exact path="/estadisticas" component={Estadisticas}/>
            </AuthenticationRequired>
        </Switch>
    </BrowserRouter>
)

export default Router;