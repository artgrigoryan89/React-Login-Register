import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LoginForm from '../containers/login_form';
import RegisterForm from '../containers/register_form';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginForm}/>
            <Route path="/register" component={RegisterForm}/>
        </Switch>
    </BrowserRouter>
)