import React, { Component } from 'react';
import { Switch, Route, HashRouter} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Articles from './pages/Articles'

class Routes extends Component {
    render() {
        return(
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/about">
                    <About />
                </Route>
                
                <Route exact path="/articles">
                    <Articles />
                </Route>
            </Switch>
        );
    }
}

export default Routes;