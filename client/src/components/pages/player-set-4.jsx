import React, { Component } from 'react';
import * as UserService from '../../services/user';
import * as PlayersService from '../../services/players';
import Pagination from '../tools/pagination-players';

export default class Players4 extends Component {

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
  };

  playersInfo() {
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
  }

  playersContent() {
    return (
      <div className="players-container">
        <h1 style={{
          textAlign: 'center'
        }}>Players: 303-403</h1>
        {this.playersInfo()}
        <Pagination />
      </div>
    )
  };

  render() {
    return this.playersContent()
  };
};