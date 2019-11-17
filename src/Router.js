import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Home from './components/pages/Home';

const Router = () => {
    return (
        <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        </BrowserRouter>
    )
}

export default Router;

