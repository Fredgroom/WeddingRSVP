import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router';
import { render } from 'react-dom';
import About from './pages/About'
import Login from './pages/Login'
import App from '../imports/ui/App';

Meteor.startup(() => {
    render(
        <BrowserRouter>

            <Switch>

                <Route exact path="/rsvp" component={App} />

                <Route path="/login" component={Login} />

                <Route path="/about" component={About} />

             </Switch>

        </BrowserRouter>,
        document.getElementById('render-target')
    );
});

