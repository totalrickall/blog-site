import React, { Component } from 'react';

export default class SpotlightNewsData extends Component {

  select() {
    alert('Something...')
  }


  container(key, date, title, content, image) {
    return (
      <div className="spotlight-news-container" onClick={() => {
        this.select();
      }} key={key}>
        <img src={image} />
        <h5 className="spotlight-news-h6">{title}</h5>
        <p className="spotlight-news-p" id="spotlight-news-p1">{content}</p>
        <p className="spotlight-news-p" id="spotlight-news-p3">{date}</p>
      </div>
    )
  };

  spotlightContent() {
    let data = this.props.data;
    let array = [];

    data.map((all) => {
      let spotlightNews = all.posts;
      for (let i = 0; i < spotlightNews.length; i++) {
        let article = spotlightNews[i];
        //console.log(article)
        array.push(article);
      }
    })
    return (
      array.map((article) => {
        let key = article.id;
        let date = article.date;
        let title = article.title;
        let content = article.content;
        let image = article.image;

        return this.container(key, date, title, content, image)
      })
    )
  };

  render() {
    return (
      <div className="home-section-1" id="list-item-1" >
        <div className="section-1-inner">
          <h3>Spotlight</h3>
          {this.spotlightContent()}
        </div>
      </div>
    )
  };
}