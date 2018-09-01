import * as baseService from './base';

function all() {
    return baseService.get(`/api/players`);
}

function read(playerid) {
    return baseService.get(`/api/posts/${playerid}`);
}

function create(data) {
    return baseService.post('/api/posts', data);
}

function update(id, data) {
    return baseService.put(`/api/posts/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/posts/${id}`);
}

export { all, read, create, update, destroy };