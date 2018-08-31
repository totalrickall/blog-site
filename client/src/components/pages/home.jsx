import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Carousel from '../tools/home-carousel';
import Sidenav from '../tools/home-sidenav';
import * as userService from '../../services/user';

export default class Home extends Component {

  componentDidMount() {
    userService.checkLogin()
      .then((loggedIn) => {
        if (loggedIn) {
          this.setState({ redirectToReferrer: true, checkingLogin: false });
        } else {
          this.setState({ checkingLogin: false });
        }
      }).catch((err) => {
        console.error(err);
      })
  };

  contactLink(description, link) {
    return <a href={link} target="_blank" style={{ margin: '0 15px', color: 'white' }}>{description}</a>
  }

  contactInfo() {
    let homeLink = '/';
    let twitterLink = 'https://www.twitter.com/'
    let facebookLink = 'https://www.facebook.com/';
    let githubLink = 'https://github.com/totalrickall/';

    return (
      <div className="home-section-4" id="list-item-2" style={{ height: '150px', background: 'black' }}>
        <div style={{ width: '50%', textAlign: 'center', position: 'relative', margin: '0 auto', top: '2rem' }}>
          {this.contactLink('(205) 555-5555', null)}
          {this.contactLink('Test@email.com', null)}
          {this.contactLink('Twitter', twitterLink)}
          {this.contactLink('Facebook', facebookLink)}
          {this.contactLink('Github', githubLink)}
        </div>
      </div>
    )
  }

  homeContent() {
    return (
      <div className="home-container">
        <div className="home-sector">
          <Carousel />
          <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
            <div className="home-section-1" id="list-item-1" style={{ height: '450px', background: '#53B99A' }}>
              <div style={{ width: '50%', textAlign: 'center', position: 'relative', margin: '0 auto', top: '8rem' }}>
                <h3>Join millions of others</h3>
                <p>Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in good company on Blogger. Sign up to discover why millions of people have published their passions here.</p>
              </div>
            </div>
            <div className="home-section-2" id="list-item-2" style={{ height: '450px', background: 'white' }}>
              <div style={{ width: '50%', textAlign: 'center', position: 'relative', margin: '0 auto', top: '8rem' }}>
                <h3>Join millions of others</h3>
                <p>Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in good company on Blogger. Sign up to discover why millions of people have published their passions here.</p>
              </div>
            </div>
            <div className="home-section-3" id="list-item-3" style={{ height: '450px', background: '#1d2b34', color: 'white' }}>
              <div style={{ width: '50%', textAlign: 'center', position: 'relative', margin: '0 auto', top: '8rem' }}>
                <h3>Join millions of others</h3>
                <p>Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in good company on Blogger. Sign up to discover why millions of people have published their passions here.</p>
                <br />
                <br />
                <a href="/sign-up" style={{ padding: '15px', background: 'lightgrey', borderRadius: '50%', color: 'black' }}>Sign Up</a>
              </div>
            </div>
            {this.contactInfo()}
          </div>
        </div>
      </div>
    )
  };

  render() {
    return (
      this.homeContent()
    )
  };
};