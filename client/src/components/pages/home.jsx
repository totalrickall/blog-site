import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Carousel from '../tools/home-carousel';
import Sidenav from '../tools/home-sidenav';
import * as userService from '../../services/user';
import * as playersService from '../../services/players';

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
      });
    playersService.all().then((data) => {
      console.log(data)
    }).catch((err) => {
      console.error(err);
    });
  };

  contactLink(description, link) {
    return <a href={link} target="_blank" style={{ margin: '0 15px', color: 'white' }}>{description}</a>
  }

  contactInfo() {
    let homeLink = '/';
    let twitterLink = 'https://www.twitter.com/';
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

    let message1 = `The National Basketball Association (NBA) is a men's professional basketball league in North America; composed of 30 teams (29 in the United States and 1 in Canada). It is widely considered to be the premier men's professional basketball league in the world. The NBA is an active member of USA Basketball (USAB), which is recognized by FIBA (also known as the International Basketball Federation) as the national governing body for basketball in the United States. The NBA is one of the four major professional sports leagues in the United States and Canada. NBA players are the world's best paid athletes by average annual salary per player.`
    let message2 = `The league was founded in New York City on June 6, 1946, as the Basketball Association of America (BAA). The league adopted the name National Basketball Association on August 3, 1949, after merging with the competing National Basketball League (NBL). The league's several international as well as individual team offices are directed out of its head offices located in the Olympic Tower at 645 Fifth Avenue in New York, NY. NBA Entertainment and NBA TV studios are directed out of offices located in Secaucus, New Jersey.`;
    
    return (
      <div className="home-container">
        <div className="home-sector">
          <Carousel />
          <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
            <div className="home-section-1" id="list-item-1" style={{ height: '600px', background: 'lightgrey' }}>
              <div style={{ width: '50%', textAlign: 'center', position: 'relative', margin: '0 auto', top: '8rem' }}>
                <h3>Join millions of others</h3>
                <p>{message1}</p>
              </div>
            </div>
            <div className="home-section-2" id="list-item-2" style={{ height: '600px', background: 'grey' }}>
              <div style={{ width: '50%', textAlign: 'center', position: 'relative', margin: '0 auto', top: '8rem' }}>
                <h3>Join millions of others</h3>
                <p>{message2}</p>
              </div>
            </div>
            <div className="home-section-3" id="list-item-3" style={{ height: '450px', background: '#1d2b34', color: 'white' }}>
              <div style={{ width: '50%', textAlign: 'center', position: 'relative', margin: '0 auto', top: '8rem' }}>
                <h3>Join millions of others</h3>
                <p>Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in good company on Blogger. Sign up to discover why millions of people have published their passions here.</p>
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