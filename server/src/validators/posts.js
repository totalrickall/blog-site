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
    let userid = +args.userid;
    let { content } = args;

    return new Promise((resolve, reject) => {
        // USERID
        if (!lodash.isFinite(userid)) {
            reject(new Error('Userid is not a number'));
            return;
        }
        // CONTENT
        if (!(lodash.isString(content))) {
            reject(new Error('Content must be alphanumeric characters.'));
            return;
        }

        resolve([userid, content]);
    })
};

export function update(args) {
    let id = +args.id;
    let userid = +args.userid;
    let { content } = args;

    return new Promise((resolve, reject) => {
        // ID & USERID
        if (!lodash.isFinite(id, userid)) {
            reject(new Error('Id or Userid is not a number.'));
            return;
        }
        // CONTENT
        if (!(lodash.isString(content))) {
            reject(new Error('Content must be alphanumeric characters.'));
            return;
        }

        resolve([id, userid, content]);
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
}

export function readByTagId(args) {
    let tagid = +args.tagid;

    return new Promise((resolve, reject) => {
        // TAGID
        if (!lodash.isFinite(tagid)) {
            reject(new Error('Tagid is not a number'));
            return;
        }

        resolve([tagid]);
    })
}