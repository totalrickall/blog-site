import React, { Component } from 'react';

export default class HeadlineArticles extends Component {

  select() {
    alert('Link to article')
  }


  container(key, date, title, content, image, link) {
    // MODAL
    return (
      <div href={link} className="headline-news-container" onClick={() => {
        this.select();
      }} key={key}>
        <img src={image} />
        <h5 className="headline-news-h6">{title}</h5>
        <p className="headline-news-p" id="headline-news-p1">{content}</p>
        <p className="headline-news-p" id="headline-news-p3">{date}</p>
      </div>
    )
  };

  headlineArticlesContent() {
    let data = this.props.data;
    let array = [];

    data.map((all) => {
      let headlineNews = all.headline
      for (let i = 0; i < headlineNews.length; i++) {
        let article = headlineNews[i];
        array.push(article);
      }
    })
    return (
      array.map((article) => {
        let { key, date, title, content, image } = article;
        let { "headline-link": link } = article.meta;

        return this.container(key, date, title, content, image, link)
      })
    )
  };

  render() {
    return (
      <div className="home-section-2" id="list-item-2" >
        <div className="section-2-inner">
          <h3>Headline Articles</h3>
          {this.headlineArticlesContent()}
        </div>
      </div>
    )
  };
}