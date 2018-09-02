import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/home';
import allPosts from './pages/all-posts';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
//import Navbar from './nav/navbar';
import Nav from './nav/nav';
import SignUp from './auth/signUp';
import Players1 from './pages/player-set-1';
import Players2 from './pages/player-set-2';
import Players3 from './pages/player-set-3';
import Players4 from './pages/player-set-4';
import Players5 from './pages/player-set-5';
import Players6 from './pages/player-set-6';

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
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route exact path="/sign-up" component={SignUp} />
                        <PrivateRoute exact path="/view-all" component={allPosts} />
                        <PrivateRoute exact path="/players/page1/0-100" component={Players1} />
                        <PrivateRoute exact path="/players/page2/101-201" component={Players2} />
                        <PrivateRoute exact path="/players/page3/202-302" component={Players3} />
                        <PrivateRoute exact path="/players/page4/303-403" component={Players4} />
                        <PrivateRoute exact path="/players/page5/404-504" component={Players5} />
                        <PrivateRoute exact path="/players/page6/505-573" component={Players6} />
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