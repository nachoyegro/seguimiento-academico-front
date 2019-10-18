import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Estadisticas from '../pages/Estadisticas';
import Login from '../pages/Login';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/estadisticas" component={Estadisticas}/>
            <Route exact path="/login" component={Login}/>
        </Switch>
    </BrowserRouter>
)

export default Router;