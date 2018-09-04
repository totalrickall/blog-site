import * as baseService from './base';

function all() {
    return baseService.get(`/api/players`);
}

function readStats(playerid) {
    return baseService.get(`/api/players/${playerid}`);
}

function readRecentNews(playerid) {
    return baseService.get(`/api/players/recent-news-for/${playerid}`);
}

function readBioInfo(playerid) {
    return baseService.get(`/api/players/bio-info/${playerid}`);
}

export { all, readStats, readRecentNews, readBioInfo };