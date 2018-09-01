import React, { Component } from 'react';
import * as UserService from '../../services/user';
import * as PlayersService from '../../services/players';

export default class Players extends Component {
  
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
        console.log(players);
      })
    })
  };

  playersContent() {
    return (
      <div className="players-container">
        <h1 style={{ textAlign: 'center' }}>Players</h1>
      </div>
    )
  };

  render() {
    return this.playersContent()
  };
};