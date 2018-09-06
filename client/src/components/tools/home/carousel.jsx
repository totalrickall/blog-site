import React, { Component } from 'react';

export default class Carousel extends Component {

  carouselItemActive(message, fontColor) {
    return (
      <div className="carousel-item active" style={{
        height: '600px',
        backgroundImage: link,
        backgroundSize: '1400px 640px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        textAlign: 'center'
      }}>
        <div style={{
          width: '50%',
          textAlign: 'center',
          position: 'relative',
          margin: '0 auto',
          top: '8rem',
          color: fontColor,
          backgroundColor: 'black',
          opacity: .8,
          padding: '20px'
        }}>
          <h1>NBA Messenger</h1>
          <p>{message}</p>
        </div>
      </div>
    )
  };

  carouselItem(key, date, title, content, image) {
    return (
      <div className="carousel-item" style={{
        height: '600px',
        backgroundColor: 'light-grey',
        backgroundSize: '1400px 640px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        textAlign: 'center'
      }}>
        <div style={{
          width: '50%',
          textAlign: 'center',
          position: 'relative',
          margin: '0 auto',
          top: '8rem',
          color: 'black',
          backgroundColor: 'black',
          opacity: .8,
          padding: '20px'
        }}>
          <h5>{title}</h5>
          <p>{content}</p>
        </div>
      </div>
    )
  };

  carouselContent() {
    let message1 = `Announcement: This is an Announcement. Obey. Thank you.`;
    let message2 = `This is the second message of the day.`;
    let message3 = `This is message 3`;
    let message4 = `This is message 4`;

    return (
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {this.carouselItemActive(message1)}
          {this.carouselItem(message2)}
          {this.carouselItem(message3)}
          {this.carouselItem(message4)}
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