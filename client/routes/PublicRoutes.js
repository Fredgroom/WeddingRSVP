import React from 'react';
import { IndexRoute, BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router';
import { render } from 'react-dom';
import About from '../pages/About'
import Host from '../pages/Host'

import App from '../../imports/ui/App';
import MainLayout from '../layouts/MainLayout';

Meteor.startup(() => {
    render(
        <BrowserRouter>
            <div>
                <MainLayout />
                <Switch>

                    <Route path="/rsvp" component={App} />

                    <Route path="/Host" component={Host} />

                    <Route path="/about" component={About} />

                </Switch>
            </div>
        </BrowserRouter>,
        document.getElementById('render-target')
    );
});

