import { Router } from 'express';
import 'isomorphic-fetch';


let router = Router();

// ALL PLAYERS
router.get('/', (req, res) => {

  let url = `http://data.nba.net/10s/prod/v1/2018/players.json`;
  
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


export default router;