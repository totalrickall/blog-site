import * as baseService from './base';

function all() {
    return baseService.get(`/api/news/homepage`);
}

function readSpotlight() {
    return baseService.get(`/api/news/spotlight`);
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

export { all, readStats, readRecentNews, readBioInfo, readSpotlight };