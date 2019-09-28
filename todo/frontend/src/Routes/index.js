import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Todo from '../components/Todo';
import About from '../components/About';

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/" />
            <Route path="/todos" component={Todo} />
            <Route path="/about" component={About} />
            <Redirect from="*" to="/"/>
        </Switch>
    )
}

export default Routes;