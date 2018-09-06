import React, { Component } from 'react';

export default class BeyondNumbersData extends Component {

  select() {
    alert('idk yet...')
  }


  container(key, date, title, content) {
    return (
      <div className="assist-leaders-container" onClick={() => {
        this.select();
      }} key={key}>
        <h6 className="assist-leaders-h6">{title}</h6>
        <p className="assist-leaders-p" id="assist-leaders-p1">{content}</p>
        <p className="assist-leaders-p" id="assist-leaders-p2">{date}</p>
      </div>
    )
  };

  beyondNumbersArticlesContent() {
    let data = this.props.data;
    let array = [];

    data.map((all) => {
      let assistLeaders = all.assistleader
      for (let i = 0; i < assistLeaders.length; i++) {
        let article = assistLeaders[i];
        //console.log(article)
        array.push(article);
      }
    })
    return (
      array.map((article) => {
        let key = article.id;
        let date = article.date;
        let title = article.title;
        let content = article.content

        return this.container(key, date, title, content)
      })
    )
  };

  render() {
    return (
      <div className="home-section-3" id="list-item-3" >
        <div className="section-3-inner">
          <h3 className="section-3-h3">Assist Leaders</h3>
          {this.beyondNumbersArticlesContent()}
        </div>
      </div>
    )
  };
}