import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Carousel from '../tools/home-carousel';
import Sidenav from '../tools/home-sidenav';

class Home extends Component {

  render() {
    return (
      <div className="home-container">
          <Sidenav />
          <div className="home-sector">
            <Carousel />
            <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
              <div className="home-section-1" id="list-item-1" style={{ height: '400px', background: '#53B99A' }}>
                <div style={{ width: '50%', textAlign: 'center', position: 'relative', margin: '0 auto', top: '8rem' }}>
                  <h3>Join millions of others</h3>
                  <p>Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in good company on Blogger. Sign up to discover why millions of people have published their passions here.</p>
                </div>
              </div>
              <div className="home-section-2" id="list-item-2" style={{ height: '400px', background: '#F63F39' }}>
                <div style={{ width: '50%', textAlign: 'center', position: 'relative', margin: '0 auto', top: '8rem' }}>
                  <h3>Join millions of others</h3>
                  <p>Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in good company on Blogger. Sign up to discover why millions of people have published their passions here.</p>
                </div>
              </div>
              <div className="home-section-3" id="list-item-3" style={{ height: '400px', background: '#F69E39' }}>
                <div style={{ width: '50%', textAlign: 'center', position: 'relative', margin: '0 auto', top: '8rem' }}>
                  <h3>Join millions of others</h3>
                  <p>Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in good company on Blogger. Sign up to discover why millions of people have published their passions here.</p>
                </div>
              </div>
              <div className="home-section-4" id="list-item-4" style={{ height: '400px', background: '#53B99A' }}>
                <div style={{ width: '50%', textAlign: 'center', position: 'relative', margin: '0 auto', top: '8rem' }}>
                  <h3>Join millions of others</h3>
                  <p>Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in good company on Blogger. Sign up to discover why millions of people have published their passions here.</p>
                  <span style={{ padding: '10px', background: '#1d2b34' }}><Link to='/view-all' style={{ color: 'white' }}>Create Your Blog!</Link></span>
                </div>
              </div>
              <div className="home-section-5" id="list-item-5" style={{ height: '400px', background: '#1d2b34', color: 'white' }}>
                <div style={{ width: '50%', textAlign: 'center', position: 'relative', margin: '0 auto', top: '8rem' }}>
                  <h3>Join millions of others</h3>
                  <p>Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in good company on Blogger. Sign up to discover why millions of people have published their passions here.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Home;