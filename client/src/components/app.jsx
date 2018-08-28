import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/home';
import ViewAll from './pages/viewAll';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import Navbar from './nav/navbar';

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
    render() {
        return (
            <Router>
                <Fragment>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <PrivateRoute path="/view-all" component={ViewAll} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}