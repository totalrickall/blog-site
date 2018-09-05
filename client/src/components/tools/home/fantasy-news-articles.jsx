import React, { Component } from 'react';

export default class FantasyNewsArticles extends Component {

  select() {
    //console.log('MODAL POPUP FOR DESCRIPTION')
    alert('MODAL POPUP FOR DESCRIPTION')
  };

  modalContent() {

  };

  container(key, date, headline, caption, team) {
    // MODAL
    return (
      <div className="fantasy-news-container" onClick={() => {
        this.select();
      }} key={key}>
        <h6 className="fantasy-news-h6">{headline}</h6>
        <p className="fantasy-news-p" id="fantasy-news-p1">{team}</p>
        <p className="fantasy-news-p" id="fantasy-news-p2">{caption}</p>
        <p className="fantasy-news-p" id="fantasy-news-p3">{date}</p>
      </div>
    )
  };

  fantasyNewsArticlesContent() {
    let data = this.props.data;
    let array = [];

    data.map((all) => {
      let fantasyNews = all.fantasynews
      for (let i = 0; i < fantasyNews.length; i++) {
        let article = fantasyNews[i];
        //console.log(article);
        array.push(article);
      }
    })
    return (
      array.map((article) => {
        let key = article.RotoId;
        let date = article.lastUpdate;
        let headline = article.Headline;
        let caption = article.ListItemCaption;
        let team = article.Team;

        return this.container(key, date, headline, caption, team)
      })
    )
  };

  render() {
    return (
      <div className="home-section-1" id="list-item-1">
        <div className="section-1-inner">
          <h3>Fantasy News</h3>
          <p>[Current_Date]</p>
          {this.fantasyNewsArticlesContent()}
        </div>
      </div>
    )
  };
}