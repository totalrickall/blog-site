import React, { Component } from 'react';

export default class FantasyNewsArticles extends Component {

  container(key, caption) {
    return (
      <div key={key}>
        <p>{caption}</p>
      </div>
    )
  }

  fantasyNewsArticlesContent() {
    let data = this.props.robot;
    let array = [];

    data.map((all) => {
      let fantasyNews = all.fantasynews
      for (let i = 0; i < fantasyNews.length; i++) {
        let article = fantasyNews[i];
        console.log(article);
        array.push(article);
      }
    })
    return (
      array.map((article) => {
        let key = article.UpdateId
        let caption = article.ListItemCaption;
        return this.container(key, caption)
      })
    )
  }
  render() {
    return this.fantasyNewsArticlesContent()
  }
}