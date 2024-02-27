import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './registration';
import Login from './login';
import Profile from './profile';

function ReactApp() {
    return (
        <Router>
            <div>
                <h1>Hello World!</h1>
                <Switch>
                    <Route path="/" exact component={Registration} />
                    <Route path="/contact" component={Login} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </div>
        </Router>
    );
}
export default ReactApp;