import React, { Component } from 'react';
import { render } from 'react-dom';
import Carousel from '../tools/home-carousel';
import * as UserService from '../../services/user';
import ContactInfo from '../tools/contactInfo';

export default class HomePage extends Component {

  componentDidMount() {
    UserService.checkLogin()
      .then((loggedIn) => {
        if (loggedIn) {
          this.setState({ redirectToReferrer: true, checkingLogin: false });
        } else {
          this.setState({ checkingLogin: false });
        }
      }).catch((err) => {
        console.error(err);
      });
  };

  homeContent() {

    let message1 = `The National Basketball Association (NBA) is a men's professional basketball league in North America; composed of 30 teams (29 in the United States and 1 in Canada). It is widely considered to be the premier men's professional basketball league in the world. The NBA is an active member of USA Basketball (USAB), which is recognized by FIBA (also known as the International Basketball Federation) as the national governing body for basketball in the United States. The NBA is one of the four major professional sports leagues in the United States and Canada. NBA players are the world's best paid athletes by average annual salary per player.`
    let message2 = `The league was founded in New York City on June 6, 1946, as the Basketball Association of America (BAA). The league adopted the name National Basketball Association on August 3, 1949, after merging with the competing National Basketball League (NBL). The league's several international as well as individual team offices are directed out of its head offices located in the Olympic Tower at 645 Fifth Avenue in New York, NY. NBA Entertainment and NBA TV studios are directed out of offices located in Secaucus, New Jersey.`;

    return (
      <div className="home-page-container">
        <div className="home-sector">
          <Carousel />
          <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
            <div className="home-section-1" id="list-item-1" style={{
              height: '600px',
              background: 'lightgrey'
            }}>
              <div style={{
                width: '50%',
                textAlign: 'center',
                position: 'relative',
                margin: '0 auto',
                top: '8rem'
              }}>
                <h3>Join millions of others</h3>
                <p>{message1}</p>
              </div>
            </div>
            <div className="home-section-2" id="list-item-2" style={{
              height: '600px',
              background: 'grey'
            }}>
              <div style={{
                width: '50%',
                textAlign: 'center',
                position: 'relative',
                margin: '0 auto',
                top: '8rem'
              }}>
                <h3>Join millions of others</h3>
                <p>{message2}</p>
              </div>
            </div>
            <div className="home-section-3" id="list-item-3" style={{
              height: '450px',
              background: '#1d2b34',
              color: 'white'
            }}>
              <div style={{
                width: '50%',
                textAlign: 'center',
                position: 'relative',
                margin: '0 auto',
                top: '8rem'
              }}>
                <h3>Join millions of others</h3>
                <p>Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in good company on Blogger. Sign up to discover why millions of people have published their passions here.</p>
                <br />
                <a className="sign-up-btn" href="/sign-up" style={{
                  padding: '15px',
                  background: 'lightgrey',
                  borderRadius: '50%',
                  color: 'black'
                }}>Sign Up</a>
              </div>
            </div>
            <ContactInfo />
          </div>
        </div>
      </div>
    )
  };

  render() {
    return this.homeContent()
  };
};