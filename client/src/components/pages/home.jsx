import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Carousel from '../tools/home-carousel';
import Sidenav from '../tools/home-sidenav';

class Home extends Component {

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
                <a href="" style={{ padding: '15px', background: 'lightgrey', borderRadius: '50%', color: 'black' }}>Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      this.homeContent()
    )
  }
}

export default Home;