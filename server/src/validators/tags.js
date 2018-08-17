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
    let { name } = args;

    return new Promise((resolve, reject) => {
        // NAME
        if (!(lodash.isString(name))) {
            reject(new Error('Name must be alphanumeric characters.'));
            return;
        }

        resolve([name]);
    })
};

export function update(args) {
    let id = +args.id;
    let { name } = args;

    return new Promise((resolve, reject) => {
        // ID
        if (!lodash.isFinite(id, userid)) {
            reject(new Error('Id or Userid is not a number.'));
            return;
        }
        // NAME
        if (!(lodash.isString(name))) {
            reject(new Error('Name must be alphanumeric characters.'));
            return;
        }

        resolve([id, name]);
    })
};