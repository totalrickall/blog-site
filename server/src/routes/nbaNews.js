import { Router } from 'express';
import 'isomorphic-fetch';

let router = Router();

export default router
    // SPECIFIC PLAYER
    .get('/homepage', (req, res) => {
        //let { playerid } = req.params;
        let url = `http://stats-prod.nba.com/wp-json/statscms/v1/homepage/`;

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
    .get('/spotlight', (req, res) => {
        let num = 10;
        let url = `https://stats-prod.nba.com/wp-json/statscms/v1/type/spotlight`;

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