import React, { Component } from 'react';

export default class FantasyNewsArticles extends Component {
  select() {
    console.log('MODAL POPUP FOR DESCRIPTION')
  }

  container(key, date, headline, caption, team) {
    // MODAL
    return (
      <div style={{
        cursor: 'pointer',
        float: 'left',
        minWidth: '30%',
        maxWidth: '30%',
        height: '350px',
        fontSize: '.8rem',
        margin: '0px 10px',
        border: '1px solid black',
        textAlign: 'center',
        overflow: 'hide',
        position: 'relative',
        left: '25px',
        textDecoration: 'none',
        color: 'black'
      }} onClick={() => {
        this.select();
      }} key={key}>
        <h6 style={{
          border: '1px solid black',
          padding: '10px',
          background: '#5298D5'
        }}>{headline}</h6>
        <p style={{
          
        }}>{team}</p>
        <p style={{
          padding: '0px 20px'
        }}>{caption}</p>
        <p style={{
          
        }}>{date}</p>
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
        let key = article.RotoId;
        let date = article.lastUpdate;
        let headline = article.Headline;
        let caption = article.ListItemCaption;
        let team = article.Team;

        return this.container(key, date, headline, caption, team)
      })
    )
  }
  render() {
    return this.fantasyNewsArticlesContent()
  }
}