import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import Contact from './Contact';
function ReactApp() {
    return (
        <Router>
            <div>
                <h1>Hello World!</h1>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
        </Router>
    );
}
export default ReactApp;