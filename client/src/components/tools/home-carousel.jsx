import React, { Component } from 'react';

export default class Carousel extends Component {

  carouselItemActive(link, message, fontColor) {
    return (
      <div className="carousel-item active" style={{ height: '600px', backgroundImage: link, backgroundSize: '1400px 640px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', textAlign: 'center' }}>
        <div style={{ width: '50%', textAlign: 'center', position: 'relative', margin: '0 auto', top: '8rem', color: fontColor, backgroundColor: 'black', opacity: .8, padding: '20px' }}>
          <h1>NBA Messenger</h1>
          <p>{message}</p>
        </div>
      </div>
    )
  };

  carouselItem(link, message, fontColor) {
    return (
      <div className="carousel-item" style={{ height: '600px', backgroundImage: link, backgroundSize: '1400px 640px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', textAlign: 'center' }}>
        <div style={{ width: '50%', textAlign: 'center', position: 'relative', margin: '0 auto', top: '8rem', color: fontColor, backgroundColor: 'black', opacity: .8, padding: '20px' }}>
          <h1>NBA Messenger</h1>
          <p>{message}</p>
        </div>
      </div>
    )
  };

  carouselContent() {
    let nbaImage1 = `url(https://newswatchtv.com/wp-content/uploads/2018/03/nba.jpg)`;
    let nbaImage2 = `url(https://sportshub.cbsistatic.com/i/r/2017/02/17/1e404556-d359-4a69-bb3a-33bc2e425a95/thumbnail/770x433/58b50e76e9e1c5900fa9cbcc303ee6c4/nba-50-best-cover.jpg)`;
    let nbaImage3 = `url(http://cleatgeeks.com/wp-content/uploads/2017/10/nba-logo-wallpaper-41588-42564-hd-wallpapers.jpg)`;
    let nbaImage4 = `url(https://studybreaks.com/wp-content/uploads/2017/07/1423710380375.jpg)`;

    let message1 = `Announcement: This is an Announcement. Obey. Thank you.`;
    let message2 = `This is the second message of the day.`;
    let message3 = `This is message 3`;
    let message4 = `This is message 4`;

    return (
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {this.carouselItemActive(nbaImage1, message1, 'white')}
          {this.carouselItem(nbaImage2, message2, 'white')}
          {this.carouselItem(nbaImage3, message3, 'white')}
          {this.carouselItem(nbaImage4, message4, 'white')}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    )
  };

  render() {
    return (
      this.carouselContent()
    )
  };
};