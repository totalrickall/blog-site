import React, { Component } from 'react';

export default class StatTable extends Component {
    tableHeader(name) {
        return (
          <th style={{
            border: '1px solid black',
            backgroundColor: 'lightgrey',
            textAlign: 'center'
          }}>{name}</th>
        )
      }
    
      thead() {
        return (
          <tr>
            {this.tableHeader(`Year`)}
            {this.tableHeader(`PPG`)}
            {this.tableHeader(`APG`)}
            {this.tableHeader(`RPG`)}
            {this.tableHeader(`SPG`)}
            {this.tableHeader(`BPG`)}
            {this.tableHeader(`MPG`)}
          </tr>
        )
      }
    
      tableCell(data) {
        return <td style={{
          border: '1px solid black',
          padding: '5px',
          textAlign: 'center'
        }}>{data}</td>
      }
    
      tableRows(year, ppg, apg, rpg, spg, bpg, mpg) {
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
        let stats = this.props.robot;
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
    
            return this.tableRows(year, ppg, apg, rpg, spg, bpg, mpg)
          })
        )
      };
    
      table() {
        return (
          <table style={{
            borderCollapse: 'collapse',
            width: '100%'
          }}>
            <thead style={{
            }}>
              {this.thead()}
            </thead>
            <tbody>
              {this.tableBody()}
            </tbody>
          </table>
        )
      }

      render() {
          return this.table()
      }
}