import React, { Component } from 'react';
import * as UserService from '../../services/user';
import * as PlayersService from '../../services/players';
import Pagination from '../tools/pagination-players';

export default class Players1 extends Component {

  constructor() {
    super();
    this.state = {
      playersCollection: []
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
        //console.log(this.state.playersCollection);
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

  playersInfo() {
    let players = this.state.playersCollection;
    let i = 0;
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let arr4 = [];
    let arr5 = [];
    let arr6 = [];

    for (i = 0; i < players.length; i++) {
      let player = players[i];

      // i: 0 to 100
      if (i >= 0 && i < 101) {
        arr1.push(player);
      }
      // i: 101 to 201
      if (i >= 101 && i < 201) {
        arr2.push(player);
      }
      // i: 202 to 302
      if (i >= 202 && i < 302) {
        arr3.push(player);
      }
      // i: 303 to 403
      if (i >= 303 && i < 403) {
        arr4.push(player);
      }
      // i: 404 to 504
      if (i >= 404 && i < 504) {
        arr5.push(player);
      }
      // i: 505 to 532
      if (i >= 505 && i < 605) {
        arr6.push(player);
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
  }

  playersContent() {
    return (
      <div className="players-container-1">
        <h1 style={{
          textAlign: 'center'
        }}>Players: 0-100</h1>
        {this.playersInfo()}
        <Pagination />
      </div>
    )
  };

  render() {
    return this.playersContent()
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