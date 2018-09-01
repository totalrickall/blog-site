import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AuthButton from '../auth/authButton';

export default class Sidenav extends Component {
    constructor() {
        super();

        this.state = {
            isSidenav: false
        }
    }

    showSidenav() {
        this.setState({
            isSidenav: !this.state.isSidenav
        })
    }

    customNavLink(link, description) {
        return (
            <a className="custom-nav-link" style={{ color: 'white' }} href={link}>{description}</a>
        )
    }

    sidenavContent() {
        if (this.state.isSidenav) {
            return (
                <div id="list-example" className="list-group" style={{ height: '100%', width: '200px', position: 'fixed', zIndex: '1', top: '0px', left: '0', overflowX: 'hidden', padding: '20px 20px', background: '#1d2b34', border: '2px solid white' }} onMouseLeave={() => {
                    this.showSidenav();
                }}>
                    <h3 style={{ color: 'white' }}>NBA MESSENGER</h3>
                    <br/>
                    {this.customNavLink('/', 'Home')}
                    {this.customNavLink('#list-item-1', 'About')}
                    {this.customNavLink('/view-all', 'View All Posts')}
                    {this.customNavLink('#list-item-3', 'Contact Us')}
                    <AuthButton />
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
            this.sidenavContent()
        )
    }
};

// <a className="scrolldown js-scroll-to" href="#list-item-2">O</a>