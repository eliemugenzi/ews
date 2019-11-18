import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import Footer from './components/layouts/Footer';
import Portfolio from './components/pages/Portfolio';

const Router = () => {
    return (
        <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
        <Footer />
        </BrowserRouter>
    )
}

export default Router;

