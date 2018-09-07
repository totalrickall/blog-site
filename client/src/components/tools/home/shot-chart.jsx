import React, { Component } from 'react';

export default class ShotChartData extends Component {

  select() {
    alert('Maybe Enlarge image')
  }


  container(key, date, title, content, image, link) {
    return (
      <div href={link} className="shotchart-news-container" onClick={() => {
        this.select();
      }} key={key}>
        <img className="shot-chart-img" src={image} />
        <h5 className="shotchart-news-h6">{title}</h5>
        <p className="shotchart-news-p" id="shotchart-news-p1">{content}</p>
        <p className="shotchart-news-p" id="shotchart-news-p3">{date}</p>
      </div>
    )
  };

  shotchartArticlesContent() {
    let data = this.props.data;
    let array = [];

    data.map((all) => {
      let shotchartNews = all.shotchart
      for (let i = 0; i < shotchartNews.length; i++) {
        let article = shotchartNews[i];
        array.push(article);
      }
    })
    return (
      array.map((article) => {
        let { key, date, title, content, image } = article;
        let { "shotchart-link": link } = article.meta;

        return this.container(key, date, title, content, image, link)
      })
    )
  };

  render() {
    return (
      <div className="home-section-5" id="list-item-5" >
        <div className="section-5-inner">
          <h3>Shotchart Data</h3>
          {this.shotchartArticlesContent()}
        </div>
      </div>
    )
  };
}