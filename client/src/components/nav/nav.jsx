import React, { Component } from 'react';
import AuthButton from '../auth/authButton';
import UserBtn from './user-btn';

export default class Nav extends Component {
    constructor() {
        super();

        this.state = {
            isNav: false
        }
    };

    showNav() {
        this.setState({
            isNav: !this.state.isNav
        })
    };

    customNavLink(link, description) {
        return (
            <a className="custom-nav-link" href={link}>{description}</a>
        )
    };

    navContent() {
        if (this.state.isNav) {

            let link1 = `/`;
            let link2 = `/about`;
            let link3 = `/players`;
            let link4 = `/view-all`;
            let link5 = `#list-item-6`;

            let description1 = `Home`;
            let description2 = `About`;
            let description3 = `View Current Players`;
            let description4 = `View All Posts`;
            let description5 = `Contact Us`;

            return (
                <div id="list-example" className="nav-container" onMouseLeave={() => {
                    this.showNav();
                }}>
                    <div className="nav-content">
                        <h3 className="nav-h3">NBA MESSENGER</h3>
                        <br />
                        {this.customNavLink(link1, description1)}
                        {this.customNavLink(link2, description2)}
                        {this.customNavLink(link3, description3)}
                        {this.customNavLink(link4, description4)}
                        {this.customNavLink(link5, description5)}
                        <AuthButton />
                    </div>
                    <UserBtn />
                </div>
            )
        } else {
            return (
                <div className="nav-logo-image-container">
                    <div className="nav-logo" onMouseOver={() => {
                        this.showNav();
                    }}></div>
                    <UserBtn />
                </div>
            )
        }
    };

    render() {
        return this.navContent()
    };
}