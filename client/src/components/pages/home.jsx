import React, { Component, Fragment } from 'react';
import '../../styles/home/home-headline-news';
import '../../styles/home/home-assist-leaders';
import '../../styles/home/home-fantasy-news';
import '../../styles/home/home-shot-chart';
import '../../styles/home/home-spotlight-news';
import { render } from 'react-dom';
import * as UserService from '../../services/user';
import * as NewsService from '../../services/news';
import ContactInfo from '../tools/contactInfo';
import FantasyNewsArticles from '../tools/home/fantasy-news-articles';
import HeadlineNewsArticles from '../tools/home/headline-articles';
import ShotChartData from '../tools/home/shot-chart';
import AssistLeadersData from '../tools/home/assist-leaders';
import SpotlightNewsData from '../tools/home/spotlight-news';

export default class HomePage extends Component {

  constructor() {
    super();

    this.state = {
      newsContainer: [],
      spotlightContainer: []
    }
  }

  componentDidMount() {
    // check user login
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
    // all NBA news articles
    NewsService.all().then((data) => {
      //console.log(data)
      this.setState({
        newsContainer: [data]
      });
    }).catch((err) => {
      console.error(err)
    });
    // all NBA spotlight articles
    NewsService.readSpotlight().then((data) => {
      //console.log(data)
      this.setState({
        spotlightContainer: [data]
      });
    }).catch((err) => {
      console.error(err)
    });

  };

  spotlightNews() {
    // 1
    return (
      <SpotlightNewsData 
        data={this.state.spotlightContainer}
      />
    )
  }

  headlineNews() {
    // 2
    return (
      <HeadlineNewsArticles
        data={this.state.newsContainer}
      />
    )
  };

  assistLeaders() {
    // 3
    return (
      <AssistLeadersData
        data={this.state.newsContainer}
      />
    )
  }

  fantasyNews() {
    // 4
    return (
      <FantasyNewsArticles
        data={this.state.newsContainer}
      />
    )
  };


  shotChartData() {
    // 5
    return (
      <ShotChartData
        data={this.state.newsContainer}
      />
    )
  };

  signUp() {
    // 6
    return (
      <div className="home-section-6" id="list-item-6" style={{
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
            background: 'white',
            borderRadius: '50%',
            color: 'black'
          }}>Sign Up</a>
        </div>
      </div>
    )
  };

  homeContent() {
    return (
      <div className="home-page-container">
        <div className="home-sector">
          <div className="home-top-container">
            <div className="home-top-banner">
              <h1>NBA Messenger</h1>
              <p>Front Page Display Message</p>
            </div>
          </div>
          <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
            {this.spotlightNews()}
            {this.headlineNews()}
            {this.assistLeaders()}
            {this.fantasyNews()}
            {this.shotChartData()}
            {this.signUp()}
            <ContactInfo />
          </div>
        </div>
      </div>
    )
  };

  render() {
    return this.homeContent()
  };
}