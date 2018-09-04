import React, { Component, Fragment } from 'react';
import * as UserService from '../../services/user';
import * as PlayersService from '../../services/players';
import Block from '../tools/block';
import ContactInfo from '../tools/contactInfo';

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

  tableHeader(name) {
    return (
      <th style={{
        border: '1px solid black',
        backgroundColor: 'lightgrey',
        textAlign: 'center'
      }}>{name}</th>
    )
  }

  tableCell(description) {
    return <td style={{
      border: '1px solid black',
      padding: '5px',
      textAlign: 'center'
    }}>{description}</td>
  }

  tableRow(year, ppg, apg, rpg, spg, bpg, mpg) {
    return (
      <tr key={year}>
        {this.tableCell(year)}
        {this.tableCell(ppg)}
        {this.tableCell(apg)}
        {this.tableCell(rpg)}
        {this.tableCell(spg)}
        {this.tableCell(bpg)}
        {this.tableCell(mpg)}
      </tr>
    )
  }
  tableBody() {
    let stats = this.state.playerStats;
    let array = []
    let seasons = stats[0].league.standard.stats.regularSeason.season;

    for (let i = 0; i < seasons.length; i++) {
      let season = seasons[i];
      array.push(season);
    }
    return (
      array.map((season) => {
        //console.log(season);
        let year = season.seasonYear;
        let ppg = season.total.ppg;
        let apg = season.total.apg;
        let rpg = season.total.rpg;
        let spg = season.total.spg;
        let bpg = season.total.bpg;
        let mpg = season.total.mpg;

        return this.tableRow(year, ppg, apg, rpg, spg, bpg, mpg)
      })
    )

    //  return (
    //    <tr key={item.id}>
    //      <td>{item.item}</td>
    //      <td>{item.categoryname}</td>
    //      <td>
    //        <i
    //          className="fa fa-trash"
    //          aria-hidden="true"
    //        />
    //      </td>
    //    </tr>
    //  );
  }

  statType(type) {
    return <p style={{
      padding: '10px'
    }}>{type}</p>
  }

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
                    background: 'grey',
                    color: 'white'
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
              <table style={{
                borderCollapse: 'collapse',
                width: '100%'
            }}>
                <thead style={{
              }}>
                <tr>
                  {this.tableHeader(`Year`)}
                  {this.tableHeader(`PPG`)}
                  {this.tableHeader(`APG`)}
                  {this.tableHeader(`RPG`)}
                  {this.tableHeader(`SPG`)}
                  {this.tableHeader(`BPG`)}
                  {this.tableHeader(`MPG`)}
                </tr>
              </thead>
              <tbody>
                {this.tableBody()}
              </tbody>
              </table>
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

  playerBioInfoContent() {
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
        {this.playerBioInfoContent()}
        <ContactInfo />
      </div>
    )
  };
}