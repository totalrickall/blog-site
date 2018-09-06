import React, { Component } from 'react';

export default class FantasyNewsArticles extends Component {

  // modal(info, headline) {
  //   return (
  //     <div>
  //       <button type="button" className="btn-modal" data-toggle="modal" data-target="#exampleModal">
  //         Read More
  //       </button>


  //       <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  //         <div className="modal-dialog" role="document">
  //           <div className="modal-content">
  //             <div className="modal-header">
  //               <h5 className="modal-title" id="exampleModalLabel">{headline}</h5>
  //               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
  //                 <span aria-hidden="true">&times;</span>
  //               </button>
  //             </div>
  //             <div className="modal-body">
  //               {info}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // };

  select() {
    alert('clicked');
  }

  container(key, date, headline, caption, team, desciption) {
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
        let desciption = article.ListItemDescription;

        return this.container(key, date, headline, caption, team, desciption)
      })
    )
  };

  render() {
    return (
      <div className="home-section-4" id="list-item-4">
        <div className="section-4-inner">
          <h3>Fantasy News</h3>
          <p>[Current_Date]</p>
          {this.fantasyNewsArticlesContent()}
        </div>
      </div>
    )
  };
}