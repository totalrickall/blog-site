import React, { Component, Fragment } from 'react';
import '../styles/app';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/home';
import aboutPage from './pages/about';
import allPostsPage from './pages/all-posts';
import AllPlayersPage from './pages/all-players';
import IndividualPlayersPage from './pages/individual-player';

import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import Nav from './nav/nav';
import SignUp from './auth/signUp';

export default class App extends Component {
    routes() {
        return (
            <Router>
                <Fragment>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route exact path="/sign-up" component={SignUp} />
                        <PrivateRoute exact path="/about" component={aboutPage} />
                        <PrivateRoute exact path="/view-all" component={allPostsPage} />
                        <PrivateRoute exact path="/players" component={AllPlayersPage} />
                        <PrivateRoute exact path="/players/:playerid" component={IndividualPlayersPage} />
                    </Switch>
                </Fragment>
            </Router>
        )
    };
    render() {
        return (
            this.routes()
        )
    }
}