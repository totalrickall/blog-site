import React, { Component, Fragment } from 'react';
import * as UserService from '../../services/user';
import * as PlayersService from '../../services/players';
import ContactInfo from '../tools/contactInfo';
//import Pagination from '../tools/pagination-players'; 
import InfoCard from '../tools/all-players/info-card';
import Block from '../tools/block';

export default class AllPlayersPage extends Component {

  constructor() {
    super();
    this.state = {
      playersCollection: [],
      playerPage: 'page1',
    }
  }

  componentDidMount() {
    PlayersService.all().then((players) => {
      let { league } = players;
      let { standard } = league;
      this.setState({
        playersCollection: [...standard]
      })
    }).catch((err) => {
      console.error(err);
    });
  };
  ///////////////////////////////////// PAGINATION /////////////////////////////////////////////////////////////
  paginationBtn(link, pageNum) {
    return (
      <li><button className="pagination-link" style={{
        padding: '2px 12px',
        cursor: 'pointer'
      }} onClick={() => {
        this.setState({
          playerPage: link
        })
      }}
      >{pageNum}</button></li>
    )
  }

  paginationContent() {
    return (

      <div>
        <ul className="pagination" style={{
          maxWidth: '17.5%',
          textAlign: 'center',
          position: 'relative',
          margin: '0 auto',
          position: 'fixed',
          left: '525px'
        }}>
          {this.paginationBtn('page1', 1)}
          {this.paginationBtn('page2', 2)}
          {this.paginationBtn('page3', 3)}
          {this.paginationBtn('page4', 4)}
          {this.paginationBtn('page5', 5)}
          {this.paginationBtn('page6', 6)}
        </ul>
      </div>
    )
  };
  //////////////////////// PLAYER INFO METHODS //////////////////////////////////////////////////////////////////////////
  playerInfoMethod(num1, num2) {
    let players = this.state.playersCollection;
    let array = []

    for (let i = 0; i < players.length; i++) {
      let player = players[i];
      // PLAYER LIMIT PER PAGE
      // ** Current: 100 **
      if (i >= num1 && i < num2) {
        array.push(player);
      }
    }
    return (
      <Fragment>
        {array.map((player) => {
          return (
            <InfoCard
              key={player.personId}
              firstName={player.firstName}
              lastName={player.lastName}
              personId={player.personId}
              link={player.personId}
            />
          )
        })}
      </Fragment>
    )
  };

  playersInfo1() {
    let num1 = 0;
    let num2 = 101;
    return this.playerInfoMethod(num1, num2)
  };

  playersInfo2() {
    let num1 = 101;
    let num2 = 201;
    return this.playerInfoMethod(num1, num2)
  };

  playersInfo3() {
    let num1 = 202;
    let num2 = 302;
    return this.playerInfoMethod(num1, num2)
  };

  playersInfo4() {
    let num1 = 303;
    let num2 = 403;
    return this.playerInfoMethod(num1, num2)
  };

  playersInfo5() {
    let num1 = 404;
    let num2 = 504;
    return this.playerInfoMethod(num1, num2)
  };

  playersInfo6() {
    let num1 = 505;
    let num2 = 605;
    return this.playerInfoMethod(num1, num2)
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////
  playersContentLayout(title, info) {
    return (
      <div className="players-container-1">
        <h1 style={{
          textAlign: 'center'
        }}>{title}</h1>
        {this.paginationContent()}
        {info}
      </div>
    )
  }
  playersContent() {
    let title1 = `Players: 0-100`;
    let title2 = `Players: 101-201`;
    let title3 = `Players: 202-302`;
    let title4 = `Players: 303-403`;
    let title5 = `Players: 404-504`;
    let title6 = `Players: 505-573`;

    if (this.state.playerPage === 'page1') {
      return this.playersContentLayout(title1, this.playersInfo1())
    };
    if (this.state.playerPage === 'page2') {
      return this.playersContentLayout(title2, this.playersInfo2())
    };
    if (this.state.playerPage === 'page3') {
      return this.playersContentLayout(title3, this.playersInfo3())
    };
    if (this.state.playerPage === 'page4') {
      return this.playersContentLayout(title4, this.playersInfo4())
    };
    if (this.state.playerPage === 'page5') {
      return this.playersContentLayout(title5, this.playersInfo5())
    };
    if (this.state.playerPage === 'page6') {
      return this.playersContentLayout(title6, this.playersInfo6())
    }
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////
  render() {
    return (
      <div className="players-page-container">
        <Block />
        <h5>Total: #</h5>
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