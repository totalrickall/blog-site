import React, { Component } from 'react';

export default class Carousel extends Component {

  carouselItemActive(color, message) {
    return (
      <div className="carousel-item active" style={{ height: '600px', background: color, textAlign: 'center' }}>
        <div style={{ width: '50%', textAlign: 'center', position: 'relative', margin: '0 auto', top: '8rem' }}>
          <h1>NBA Messenger</h1>
          <p>{message}</p>
        </div>
      </div>
    )
  };

  carouselItem(color, message) {
    return (
      <div className="carousel-item" style={{ height: '600px', background: color, textAlign: 'center' }}>
        <div style={{ width: '50%', textAlign: 'center', position: 'relative', margin: '0 auto', top: '8rem' }}>
          <h1>NBA Messenger</h1>
          <p>{message}</p>
        </div>
      </div>
    )
  };

  carousel() {
    return (
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {this.carouselItemActive('#F69E39', 'This is message 1')}
          {this.carouselItem('#399EF6', 'This is message 2')}
          {this.carouselItem('#6101B5', 'This is message 3')}
          {this.carouselItem('#F63F39', 'This is message 4')}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    )
  }
  render() {
    return (
      this.carousel()
    )
  }
};