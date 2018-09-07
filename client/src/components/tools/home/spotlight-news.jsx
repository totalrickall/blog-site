import React, { Component, Fragment } from 'react';
import ReactSiema from 'react-siema'

export default class SpotlightNewsData extends Component {

  slide(key, date, title, content, image) {
    const Slide = (props) => <Fragment>
      <span className="section-1-title">{title}</span>
      <span className="section-1-date">{date}</span>
      <img {...props} alt="slide" />
    </Fragment>

    return (
      <Slide src={image}  key={key}/>

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
        let { key, date, title, content, image } = article;

        return this.slide(key, date, title, content, image);
      })
    )
  };

  render() {
    const settings = {
      duration: 2000,
      draggable: true,
      loop: true
    }
    return (
      <div className="home-section-1">
        <div className="section-1-inner">
          <div className="section-1-intro">The NBA provides an enormous amount of undocumented filterable public data via URL endpoints on their websites. This includes statistical data as well as general/historical information about the league, its teams, players, and more. Most of this information is returned as JSON data, but there are also endpoints that retrieve data in XML and PDF formats.</div>
          <ReactSiema {...settings}>
            {this.spotlightContent()}
          </ReactSiema>
        </div>
      </div>
    )
  };
}
