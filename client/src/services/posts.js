import * as baseService from './base';

function all() {
    return baseService.get('/api/posts');
}

function one(id) {
    return baseService.get(`/api/posts/${id}`);
}

function insert(data) {
    return baseService.post('/api/posts', data);
}

function update(id, data) {
    return baseService.put(`/api/posts/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/posts/${id}`);
}

export { all, one, insert, update, destroy };