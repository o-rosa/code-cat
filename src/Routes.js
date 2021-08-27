import React, { Component } from 'react';
import { Switch, Route, HashRouter} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Posts from './pages/Posts'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

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
                
                <Route exact path="/posts">
                    <Posts />
                </Route>

                <Route exact path="/projects">
                    <Projects />
                </Route>
                
                <Route exact path="/contact">
                    <Contact />
                </Route>
            </Switch>
        );
    }
}

export default Routes;