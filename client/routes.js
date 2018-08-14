import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router';
import { render } from 'react-dom';
import About from './pages/About'
import AccountsUI from './pages/Accounts.js'
import App from '../imports/ui/App';
import MainLayout from './layouts/MainLayout';

Meteor.startup(() => {
    render(
        <BrowserRouter>

            <Switch>

                <Route exact path="/rsvp" component={App} />

                <Route path="/login" component={AccountsUI} />

                <Route path="/about" component={About} />

                <Route path="/" component={MainLayout} />
               
             </Switch>

        </BrowserRouter>,
        document.getElementById('render-target')
    );
});

