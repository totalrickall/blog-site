import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AuthButton from '../auth/authButton';

export default class Sidenav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSidenav: false
        }
    }

    showSidenav() {
        this.setState({
            isSidenav: !this.state.isSidenav
        })
    }

    isSidenav() {
        if (this.state.isSidenav) {
            return (
                <div id="list-example" className="list-group" style={{ height: '100%', width: '200px', position: 'fixed', zIndex: '1', top: '0px', left: '0', overflowX: 'hidden', padding: '20px 20px', background: '#1d2b34' }} onMouseLeave={() => {
                    this.showSidenav();
                }}>
                    <span className="list-group-item list-group-item-action"><Link to="/">Home</Link></span>
                    <a className="list-group-item list-group-item-action" href="#list-item-1">About</a>
                    <span className="list-group-item list-group-item-action"><Link to="/view-all">View All</Link></span>
                    <a className="list-group-item list-group-item-action" href="#list-item-3">Contact Us</a>
                    <span className="list-group-item list-group-item-action"><AuthButton /></span>
                </div>
            )
        } else {
            return (
                <img
                    className="btn-show-sidenav d-flex m-3"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdeAQBPcAU-xNhbK3OVuzf1cYvSkTEv3OskLD1Whe07SSpNz7"
                    style={{ position: 'fixed', zIndex: '1', left: '0', overflowX: 'hidden', padding: '10px', weight: '80px', height: '80px', backgroundColor: 'black' }}
                    onMouseOver={() => {
                        this.showSidenav();
                    }}
                />
            )
        }
    }
    render() {
        return (
            this.isSidenav()
        )
    }
};

// <a className="scrolldown js-scroll-to" href="#list-item-2">O</a>