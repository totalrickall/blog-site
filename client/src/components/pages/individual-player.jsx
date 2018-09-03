import React, { Component } from 'react';
import * as UserService from '../../services/user';
import * as PlayersService from '../../services/players';
import Block from '../tools/block';

export default class IndividualPlayerPage extends Component {
  constructor() {
    super();

    this.state = {
      individualContainer: [],
      playersCollection: []
    }

  };
  componentDidMount() {
    UserService.me().then((user) => {
      //console.log(user);
      return PlayersService.read(this.props.match.params.playerid).then((player) => {
        //console.log(player);
        this.setState({
          individualContainer: [player]
        })
      }).catch((err) => {
        console.error(err);
      });
    }).catch((err) => {
      console.error(err);
    });
  };

  individualPlayerContent() {
    return (
      <div>
        {this.state.individualContainer.map((player) => {
          console.log(player)
          // return (
          //   <div key={player.id} style={{
          //     textAlign: 'center'
          //   }}>
          //     <h1>{player.display_name}: {player.id}</h1>
          //     <p>{player.professional}</p>
          //   </div>

          // )
        })}
      </div>
    )
  };

  render() {
    return (
      <div className="individual-player-page-container">
        <Block />
        {this.individualPlayerContent()}
      </div>
    )
  };
}