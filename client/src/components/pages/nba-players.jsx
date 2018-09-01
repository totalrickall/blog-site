import React, { Component } from 'react';
import * as UserService from '../../services/user';
import * as PlayersService from '../../services/players';
import Pagination from '../tools/pagination-players';

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

    for(let i = 0; i < players.length; i++) {
      
    }

    // return (
    //   <div style={{textAlign: 'center'}}>
    //     Players Info
    //   </div>
    // )
  }

  playersContent() {
    return (
      <div className="players-container">
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