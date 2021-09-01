import React, { Component } from 'react';
import { Switch, Route, HashRouter} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Articles from './pages/Articles'
import Donate from './pages/Donate';


class Routes extends Component {
    render() {
        return(
            <Switch>
                <Route exact path="/">
                    <Home />
                    <Donate />
                </Route>

                <Route exact path="/about">
                    <About />
                </Route>
                
                <Route exact path="/articles">
                    <Articles />
                </Route>

                <Route exact path="/donate">
                    <Donate />
                </Route>
            </Switch>
        );
    }
}

export default Routes;