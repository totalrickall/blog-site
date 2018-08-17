import lodash from 'lodash';
import emailValidator from 'email-validator';

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
    let { email, firstname, lastname, password } = args;

    return new Promise((resolve, reject) => {
        // EMAIL
        if (!emailValidator.validate(email)) {
            reject(new Error('This is not a proper email.'));
            return;
        }
        // FIRSTNAME & LASTNAME & PASSWORD
        if (!(lodash.isString(firstname, lastname, password))) {
            reject(new Error('Firstname, lastname and password must be alphanumeric characters.'));
            return;
        }

        resolve([email, firstname, lastname, password]);
    })
};

export function update(args) {
    let id = +args.id;
    let { email, firstname, lastname, password } = args;

    return new Promise((resolve, reject) => {
        // ID
        if (!lodash.isFinite(id)) {
            reject(new Error('Id is not a number.'));
            return;
        }
        // EMAIL
        if (!emailValidator.validate(email)) {
            reject(new Error('This is not a proper email.'));
            return;
        }
        // FIRSTNAME & LASTNAME & PASSWORD
        if (!(lodash.isString(firstname, lastname, password))) {
            reject(new Error('Firstname, lastname and password must be alphanumeric characters.'));
            return;
        }

        resolve([id, email, firstname, lastname, password]);
    })
};