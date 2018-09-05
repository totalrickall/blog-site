import React, { Component, Fragment } from 'react';
import * as UserService from '../../services/user';
import * as PlayersService from '../../services/players';
import Block from '../tools/block';
import ContactInfo from '../tools/contactInfo';
import StatTable from '../tools/individual-player/statTable';

export default class IndividualPlayerPage extends Component {
  constructor() {
    super();

    this.state = {
      playerStats: [],
      recentNewsContainer: [],
      bioInfoContainer: []
    }

  };
  componentDidMount() {
    PlayersService.readStats(this.props.match.params.playerid).then((player) => {
      //console.log(player);
      this.setState({
        playerStats: [player]
      })
    }).catch((err) => {
      console.log(err);
    });

    PlayersService.readRecentNews(this.props.match.params.playerid).then((player) => {
      //console.log(player);
      this.setState({
        recentNewsContainer: [player]
      })
    }).catch((err) => {
      console.log(err);
    });

    PlayersService.readBioInfo(this.props.match.params.playerid).then((player) => {
      //console.log(player);
      this.setState({
        bioInfoContainer: [player]
      })
    }).catch((err) => {
      console.log(err);
    });
  };

  statType(type) {
    return <p style={{
      padding: '10px'
    }}>{type}</p>
  };

  playerStats() {
    return (
      <div>
        {this.state.playerStats.map((data) => {
          //console.log(data)
          let stats = data.league.standard.stats.careerSummary
          //console.log(stats)
          return (
            <div key={stats.ppg}>
              <div style={{
                border: '1px solid black',
                width: '300px'
              }}>
                <h3
                  style={{
                    padding: '8px',
                    background: 'lightgrey'
                  }}
                >Career Averages</h3>
                {this.statType(`PPG: ${stats.ppg}`)}
                {this.statType(`APG: ${stats.apg}`)}
                {this.statType(`RPG: ${stats.rpg}`)}
                {this.statType(`SPG: ${stats.spg}`)}
                {this.statType(`BPG: ${stats.bpg}`)}
                {this.statType(`MPG: ${stats.mpg}`)}
              </div>
              <br />
              <StatTable 
                robot={this.state.playerStats}
              />
            </div>



          )
        })}
      </div>
    )
  };

  // playerRecentNewsContent() {
  //   return (
  //     <div>
  //       {this.state.recentNewsContainer.map((player) => {
  //         console.log(player)
  //          return (
  //            <div key={player.id} style={{
  //              textAlign: 'center'
  //            }}>
  //              <h1>{player.display_name}: {player.id}</h1>
  //              <p>{player.professional}</p>
  //            </div>

  //          )
  //       })}
  //     </div>
  //   )
  // };

  playerInfoContent() {
    return (
      <div>
        {this.state.bioInfoContainer.map((player) => {
          let info = player.Bio;
          //console.log(info)
          return (
            <div key={info.id} style={{
              padding: '20px'
            }}>
              <h1>{info.display_name}:</h1>
              <h5> PlayerID: {info.id}</h5>
              {this.playerStats()}
            </div>

          )
        })}
      </div>
    )
  };

  render() {
    return (
      <div className="individual-player-page-container" key={0} style={{

      }}>
        <Block />
        {/*{this.playerRecentNewsContent()}*/}
        {this.playerInfoContent()}
        <ContactInfo />
      </div>
    )
  };
}