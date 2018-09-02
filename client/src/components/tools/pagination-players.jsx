import React, { Component } from 'react';

export default class Pagination extends Component {

    listItem(link, description) {
        return (
          <li><button className="pagination-link" style={{
            margin: '22px'
          }} onClick={() => {
            this.show1()
          }}
          >{description}</button></li>
        )
      }
    
      paginationContent() {
        let link1 = '';
        let link2 = '';
        let link3 = '';
        let link4 = '';
        let link5 = '';
        let link6 = '';
    
        return (
          <div>
            <ul className="pagination" style={{
              width: '27.5%',
              textAlign: 'center',
              position: 'relative',
              margin: '0 auto'
            }}>
              {this.listItem(link1, 1)}
              {this.listItem(link2, 2)}
              {this.listItem(link3, 3)}
              {this.listItem(link4, 4)}
              {this.listItem(link5, 5)}
              {this.listItem(link6, 6)}
            </ul>
          </div>
        )
      };

    render() {
        return this.paginationContent()
    };
};