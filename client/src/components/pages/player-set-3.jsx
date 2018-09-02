import React, { Component } from 'react';
import * as UserService from '../../services/user';
import * as PlayersService from '../../services/players';
import Pagination from '../tools/pagination-players';

export default class Players3 extends Component {

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

  }

  playersContent() {
    return (
      <div className="players-container">
        <h1 style={{
          textAlign: 'center'
        }}>Players: 202-302</h1>
        {this.playersInfo()}
        <Pagination />
      </div>
    )
  };

  render() {
    return this.playersContent()
  };
};