import React, { Component, Fragment } from 'react';
import '../../styles/home-fantasy-news';
import '../../styles/home-headline-news';
import { render } from 'react-dom';
import Carousel from '../tools/home/carousel';
import * as UserService from '../../services/user';
import * as NewsService from '../../services/news';
import ContactInfo from '../tools/contactInfo';
import FantasyNewsArticles from '../tools/home/fantasy-news-articles';
import HeadlineNewsArticles from '../tools/home/headline-articles';

export default class HomePage extends Component {

  constructor() {
    super();

    this.state = {
      newsContainer: []
    }
  }

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

    NewsService.all().then((data) => {
      console.log(data)
      this.setState({
        newsContainer: [data]
      });
    }).catch((err) => {
      console.error(err)
    });

  };

  signUp() {
    return (
      <div className="home-section-5" id="list-item-5" style={{
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
  }

  shotChartData() {
    return (
      <div className="home-section-3" id="list-item-3" style={{
        height: '450px',
        background: 'white',
      }}>
        <div style={{
          width: '50%',
          textAlign: 'center',
          position: 'relative',
          margin: '0 auto',
          top: '8rem'
        }}>
          <h3>* Coming Soon Shot Chart Data</h3>
        </div>
      </div>
    )
  }

  beyondTheNumbers() {
    return (
      <div className="home-section-4" id="list-item-4" style={{
        height: '450px',
        background: 'white',
      }}>
        <div style={{
          width: '50%',
          textAlign: 'center',
          position: 'relative',
          margin: '0 auto',
          top: '8rem'
        }}>
          <h3>* Coming Soon Beyond the Numbers</h3>
        </div>
      </div>
    )
  }

  boxScoreLinks() {
    return (
      <div className="home-section-6" id="list-item-6" style={{
        height: '450px',
        background: 'white',
      }}>
        <div style={{
          width: '50%',
          textAlign: 'center',
          position: 'relative',
          margin: '0 auto',
          top: '8rem'
        }}>
          <h3>* Coming Soon Box Score Links</h3>
        </div>
      </div>
    )
  }

  fantasyNews() {
    return (
      <FantasyNewsArticles
        data={this.state.newsContainer}
      />
    )
  }

  headlineNews() {
    return (
      <HeadlineNewsArticles
        data={this.state.newsContainer}
      />
    )
  }

  homeContent() {
    return (
      <div className="home-page-container">
        <div className="home-sector">
          <Carousel />
          <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
            {this.headlineNews()}
            {this.fantasyNews()}
            {this.shotChartData()}
            {this.beyondTheNumbers()}
            {this.boxScoreLinks()}
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