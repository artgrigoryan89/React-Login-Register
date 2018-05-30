import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LoginForm from '../components/LoginInput';
import RegisterForm from '../components/RegisterInput';
import AdminPanel from '../components/AdminPanel';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginForm}/>
            <Route path="/register" component={RegisterForm}/>
            <Route path="/adminPanel" component={AdminPanel}/>
        </Switch>
    </BrowserRouter>
)