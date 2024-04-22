import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Gallery from './pages/Gallery';
import Subscriber from './pages/Subscriber';

function AppRouter() {
    return (
    <Router>
        <div>
        <Header />
        
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/subscribe" component={Subscriber} />
        </Switch>
        </div>
    </Router>
    );
}

export default AppRouter;
