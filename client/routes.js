import React from 'react';
import { IndexRoute, BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router';
import { render } from 'react-dom';
import About from './pages/About'

import App from '../imports/ui/App';
import MainLayout from './layouts/MainLayout';

Meteor.startup(() => {
    render(
        <BrowserRouter>

            <Switch>

                <Route path="/rsvp" component={App} />

                <Route path="/about" component={About} />

                <Route path="/nav" component={MainLayout} />
               
             </Switch>

        </BrowserRouter>,
        document.getElementById('render-target')
    );
});

