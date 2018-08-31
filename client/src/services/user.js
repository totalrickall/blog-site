import * as baseService from './base';

let loggedIn = false;

function isLoggedIn() {
    return loggedIn;
}

function checkLogin() {
    if (loggedIn) {
        return Promise.resolve(true);
    } else {
        baseService.populateAuthToken();
        return me()
        .then((user) => {
            loggedIn = true;
            return Promise.resolve(true);
        }).catch(() => {
            return Promise.resolve(false);
        });
    }
}

function login(email, password) {
    return baseService.makeFetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then((response) => {
        if (response.ok) {
            return response.json()
            .then((jsonResponse) => {
                baseService.setAuthToken(jsonResponse.token);
                loggedIn = true;
            });
        } else if (response.status === 401) {
            return response.json()
            .then((jsonResponse) => {
                throw jsonResponse;
            });
        }
    });
}

function logout() {
    baseService.clearAuthToken();
    loggedIn = false;
}

// use this a lot
function me() {
    return baseService.get('/api/users/me');
}

function all() {
    return baseService.get('/api/users');
}

function read(id) {
    return baseService.get(`/api/users/${id}`);
}

function create(data) {
    return baseService.post('/api/users', data);
}

function update(id, data) {
    return baseService.put(`/api/users/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/users/${id}`);
}

export { isLoggedIn, checkLogin, login, logout, me, all, read, create, update, destroy };
