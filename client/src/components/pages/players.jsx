import React, { Component } from 'react';
import * as UserService from '../../services/user';
import * as PlayersService from '../../services/players';
import ContactInfo from '../tools/contactInfo';
//import Pagination from '../tools/pagination-players';
import { jj } from '../tools/players-info';

export default class Players1 extends Component {

  constructor() {
    super();
    this.state = {
      playersCollection: [],
      playerPage: 'page1',
    }
  }

  componentDidMount() {
    UserService.me().then((user) => {
      //console.log(user);
      return PlayersService.all().then((players) => {
        let { league } = players;
        let { standard } = league;
        this.setState({
          playersCollection: [...standard]
        })
      }).catch((err) => {
        console.error(err);
      });
    }).catch((err) => {
      console.error(err);
    });

    //PlayersService.read(this.props.match.params.id).then((x) => {
    //  console.log(x);
    //});
  };

  paginationContent() {
    return (

      <div>
        <ul className="pagination" style={{
          maxWidth: '17.5%',
          textAlign: 'center',
          position: 'relative',
          margin: '0 auto'
        }}>
          <li><button className="pagination-link" style={{
            padding: '2px 12px'
          }} onClick={() => {
            this.setState({
              playerPage: 'page1'
            })
          }}
          >1</button></li>
          <li><button className="pagination-link" style={{
            padding: '2px 12px'
          }} onClick={() => {
            this.setState({
              playerPage: 'page2'
            })
          }}
          >2</button></li>
          <li><button className="pagination-link" style={{
            padding: '2px 12px'
          }} onClick={() => {
            this.setState({
              playerPage: 'page3'
            })
          }}
          >3</button></li>
          <li><button className="pagination-link" style={{
            padding: '2px 12px'
          }} onClick={() => {
            this.setState({
              playerPage: 'page4'
            })
          }}
          >4</button></li>
          <li><button className="pagination-link" style={{
            padding: '2px 12px'
          }} onClick={() => {
            this.setState({
              playerPage: 'page5'
            })
          }}
          >5</button></li>
          <li><button className="pagination-link" style={{
            padding: '2px 12px'
          }} onClick={() => {
            this.setState({
              playerPage: 'page6'
            })
          }}
          >6</button></li>
        </ul>
      </div>
    )
  };

  /// PLAYER INFO METHODS
  playersInfo1() {
    let players = this.state.playersCollection;
    let i = 0;
    let arr1 = [];

    for (i = 0; i < players.length; i++) {
      let player = players[i];
      // i: 0 to 100
      if (i >= 0 && i < 101) {
        arr1.push(player);
      }
    }
    return (
      <div>
        {arr1.map((x) => {
          return (
            <div key={x.personId}>
              {x.lastName}
            </div>
          )
        })}
      </div>
    )
  };

  playersInfo2() {
    let players = this.state.playersCollection;
    let i = 0;
    let arr2 = [];

    for (i = 0; i < players.length; i++) {
      let player = players[i];
      // i: 101 to 201
      if (i >= 101 && i < 201) {
        arr2.push(player);
      }
    }
    return (
      <div>
        {arr2.map((x) => {
          return (
            <div key={x.personId}>
              {x.lastName}
            </div>
          )
        })}
      </div>
    )
  };

  playersInfo3() {
    let players = this.state.playersCollection;
    let i = 0;
    let arr3 = [];

    for (i = 0; i < players.length; i++) {
      let player = players[i];
      // i: 202 to 302
      if (i >= 202 && i < 302) {
        arr3.push(player);
      }
    }
    return (
      <div>
        {arr3.map((x) => {
          return (
            <div key={x.personId}>
              {x.lastName}
            </div>
          )
        })}
      </div>
    )
  };

  playersInfo4() {
    let players = this.state.playersCollection;
    let i = 0;
    let arr4 = [];

    for (i = 0; i < players.length; i++) {
      let player = players[i];
      // i: 303 to 403
      if (i >= 303 && i < 403) {
        arr4.push(player);
      }
    }
    return (
      <div>
        {arr4.map((x) => {
          return (
            <div key={x.personId}>
              {x.lastName}
            </div>
          )
        })}
      </div>
    )
  };

  playersInfo5() {
    let players = this.state.playersCollection;
    let i = 0;
    let arr5 = [];

    for (i = 0; i < players.length; i++) {
      let player = players[i];
      // i: 404 to 504
      if (i >= 404 && i < 504) {
        arr5.push(player);
      }
    }
    return (
      <div>
        {arr5.map((x) => {
          return (
            <div key={x.personId}>
              {x.lastName}
            </div>
          )
        })}
      </div>
    )
  }

  playersInfo6() {
    let players = this.state.playersCollection;
    let i = 0;
    let arr6 = [];

    for (i = 0; i < players.length; i++) {
      let player = players[i];
      // i: 505 to 532
      if (i >= 505 && i < 605) {
        arr6.push(player);
      }
    }
    return (
      <div>
        {arr6.map((x) => {
          return (
            <div key={x.personId}>
              {x.lastName}
            </div>
          )
        })}
      </div>
    )
  };

  /////////////////////////////////////////////////
  playersContent() {
    if (this.state.playerPage === 'page1') {
      return (
        <div className="players-container-1">
          {this.paginationContent()}
          <h1 style={{
            textAlign: 'center'
          }}>Players: 0-100</h1>
          {this.playersInfo1()}
          {this.paginationContent()}
        </div>
      )
    };
    if (this.state.playerPage === 'page2') {
      return (
        <div className="players-container-2">
          {this.paginationContent()}
          <h1 style={{
            textAlign: 'center'
          }}>Players: 101-201</h1>
          {this.playersInfo2()}
          {this.paginationContent()}
        </div>
      )
    };
    if (this.state.playerPage === 'page3') {
      return (
        <div className="players-container-3">
          {this.paginationContent()}
          <h1 style={{
            textAlign: 'center'
          }}>Players: 202-302</h1>
          {this.playersInfo3()}
          {this.paginationContent()}
        </div>
      )
    };
    if (this.state.playerPage === 'page4') {
      return (
        <div className="players-container-4">
          {this.paginationContent()}
          <h1 style={{
            textAlign: 'center'
          }}>Players: 303-403</h1>
          {this.playersInfo4()}
          {this.paginationContent()}
        </div>
      )
    };
    if (this.state.playerPage === 'page5') {
      return (
        <div className="players-container-5">
          {this.paginationContent()}
          <h1 style={{
            textAlign: 'center'
          }}>Players: 404-504</h1>
          {this.playersInfo5()}
          {this.paginationContent()}
        </div>
      )
    };
    if (this.state.playerPage === 'page6') {
      return (
        <div className="players-container-6">
          {this.paginationContent()}
          <h1 style={{
            textAlign: 'center'
          }}>Players: 505-573</h1>
          {this.playersInfo6()}
          {this.paginationContent()}
        </div>
      )
    }
  };

  render() {
    return (
      <div className="players-container">
        {this.playersContent()}
        <ContactInfo />
      </div>
    )
  };
};


// let {
//   collegeName,
//   country,
//   dateOfBirthUTC,
//   draft,
//   firstName,
//   heightFeet,
//   heightInches,
//   heightMeters,
//   isActive,
//   jersey,
//   lastAffiliation,
//   lastName,
//   nbaDebutYear,
//   personId,
//   pos,
//   teamId,
//   teams,
//   weightKilograms,
//   weightPounds,
//   yearsPro
// } = player;