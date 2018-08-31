import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/home';
import allPosts from './pages/all-posts';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
//import Navbar from './nav/navbar';
import Sidenav from './tools/home-sidenav';
import SignUp from './auth/signUp';

export default class App extends Component {
    checkedLogin() {
        if (!this.state.loggedIn) {
          userService.checkLogin().then(isAuthenticated => {
            //console.log("from Services login status is:" + isAuthenticated);
            if (isAuthenticated) {
              this.setState({
                loggedIn: isAuthenticated
              });
            }
          });
        }
    };

    routes() {
        return (
            <Router>
                <Fragment>
                    <Sidenav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route exact path="/sign-up" component={SignUp} />
                        <PrivateRoute exact path="/view-all" component={allPosts} />
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