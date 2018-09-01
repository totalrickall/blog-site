import React, { Component } from 'react';
import AuthButton from '../auth/authButton';

export default class Nav extends Component {
    constructor() {
        super();

        this.state = {
            isNav: false
        }
    }

    showNav() {
        this.setState({
            isNav: !this.state.isNav
        })
    }

    customNavLink(link, description) {
        return (
            <a className="custom-nav-link" style={{
                color: 'white'
            }}
                href={link}>{description}</a>
        )
    }

    navContent() {
        if (this.state.isNav) {

            let link1 = `/`;
            let link2 = `list-item-1`;
            let link3 = `/players`;
            let link4 = `/view-all`;
            let link5 = `#list-item-3`;

            let description1 = `Home`;
            let description2 = `About`;
            let description3 = `View Current Players`;
            let description4 = `View All Posts`;
            let description5 = `Contact Us`;

            return (
                <div id="list-example" className="list-group" style={{
                    height: '100%', 
                    width: '200px', 
                    position: 'fixed', 
                    zIndex: '1', 
                    top: '0px', 
                    left: '0', 
                    overflowX: 'hidden', 
                    padding: '20px 20px', 
                    background: '#1d2b34', 
                    border: '2px solid white'
                }}
                    onMouseLeave={() => {
                        this.showNav();
                    }}>
                    <h3 style={{ color: 'white' }}>NBA MESSENGER</h3>
                    <br />
                    {this.customNavLink(link1, description1)}
                    {this.customNavLink(link2, description2)}
                    {this.customNavLink(link3, description3)}
                    {this.customNavLink(link4, description4)}
                    {this.customNavLink(link5, description5)}
                    <AuthButton />
                </div>
            )
        } else {
            return (
                    <img
                        className="nav-logo-image d-flex m-3"
                        src="http://www.stickpng.com/assets/images/5856a5274f6ae202fedf2762.png"
                        style={{
                            position: 'fixed',
                            zIndex: '1',
                            left: '0',
                            overflowX: 'hidden',
                            weight: '80px',
                            height: '80px',
                            background: 'transparent',
                        }}
                        onMouseOver={() => {
                            this.showNav();
                        }}
                    />
            )
        }
    }
    render() {
        return (
            this.navContent()
        )
    }
};