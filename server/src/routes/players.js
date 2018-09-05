import { Router } from 'express';
import 'isomorphic-fetch';


let router = Router();

// ALL PLAYERS
export default router.get('/', (req, res) => {
  let url = `http://data.nba.net/10s/prod/v1/2016/players.json`;

  fetch(url, {
    method: 'GET',
    headers: { "Content-Type": "application/json" }
  }).then((results) => {
    return results.json()
  }).then((results) => {
    res.send(results);
  }).catch((err) => {
    console.error(err)
  });
})
  // SPECIFIC PLAYER
  .get('/:playerid', (req, res) => {
    let { playerid } = req.params;
    let url = `http://data.nba.net/prod/v1/2016/players/${playerid}_profile.json`;

    fetch(url, {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    }).then((results) => {
      return results.json()
    }).then((results) => {
      res.send(results);
    }).catch((err) => {
      console.error(err)
    });
  })
  // BIO INFO & RECENT PLAYER NEWS (i.e. articles)
  .get('/recent-news-for/:playerid', (req, res) => {
    let { playerid } = req.params;
    let url = `https://stats-prod.nba.com/wp-json/statscms/v1/rotowire/player/?playerId=${playerid}&limit=10&offset=0`;

    fetch(url, {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    }).then((results) => {
      return results.json()
    }).then((results) => {
      res.send(results);
    }).catch((err) => {
      console.error(err)
    });
  })

  .get('/bio-info/:playerid', (req, res) => {
    let { playerid } = req.params;
    let url = `http://data.nba.net/json/bios/player_${playerid}.json`;

    fetch(url, {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    }).then((results) => {
      return results.json()
    }).then((results) => {
      res.send(results);
    }).catch((err) => {
      console.error(err)
    });
  })