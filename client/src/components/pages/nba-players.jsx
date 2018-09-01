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

    for (i = 0; i < players.length; i++) {
      let player = players[i];
      
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
  }

  playersContent() {
    return (
      <div className="players-container" id="player-set-1-20">
        <h1 style={{
          textAlign: 'center'
        }}>Players</h1>
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