import lodash from 'lodash';

export function all() {
    return Promise.resolve([]);
};

export function read(args) {
    let id = +args.id;

    return new Promise((resolve, reject) => {
        // ID
        if (!lodash.isFinite(id)) {
            reject(new Error('Id is not a number'));
            return;
        }

        resolve([id]);
    })
};

export function create(args) {
    let postid = +args.postid;
    let userid = +args.userid;

    return new Promise((resolve, reject) => {
        // POSTID & USERID
        if (!lodash.isFinite(postid, userid)) {
            reject(new Error('Postid or Userid is not a number'));
            return;
        }

        resolve([postid, userid]);
    })
};

export function update(args) {
    let id = +args.id;
    let postid = +args.postid;
    let userid = +args.userid;

    return new Promise((resolve, reject) => {
        // ID
        if (!lodash.isFinite(id, postid, userid)) {
            reject(new Error('Id, Postid or Userid is not a number.'));
            return;
        }

        resolve([id, postid, userid]);
    })
};

export function readByPostId(args) {
    let postid = +args.postid;

    return new Promise((resolve, reject) => {
        // USERID
        if (!lodash.isFinite(postid)) {
            reject(new Error('Postid is not a number'));
            return;
        }

        resolve([postid]);
    })
};

export function readByUserId(args) {
    let userid = +args.userid;

    return new Promise((resolve, reject) => {
        // USERID
        if (!lodash.isFinite(userid)) {
            reject(new Error('Userid is not a number'));
            return;
        }

        resolve([userid]);
    })
};

export function destroyByPostIdAndUserId(args) {
    let postid = +args.postid;
    let userid = +args.userid;

    return new Promise((resolve, reject) => {
        // POSTID & USERID
        if (!lodash.isFinite(postid, userid)) {
            reject(new Error('Postid or Userid is not a number'));
            return;
        }

        resolve([postid, userid]);
    })
};