import * as UserValidators from '../validators/users';
import * as UserProcedures from '../procedures/users';

export function all(req, res, next) {
    UserProcedures.all().then((users) => {
        res.json(users);
    }).catch((err) => {
        console.error(err);
    });
}

export function read(req, res, next) {
    let { id } = req.params;

    UserValidators.read({
        id,
    }).then((sqlArgs) => {
        return UserProcedures.read(sqlArgs);
    }).then((user) => {
        res.json(user);
    }).catch((err) => {
        console.error(err);
    });
}

export function create(req, res, next) {
    let { email, firstname, lastname, password } = req.body;

    UserValidators.create({
        email,
        firstname,
        lastname,
        password
    }).then((sqlArgs) => {
        return UserProcedures.create(sqlArgs);
    }).then((user) => {
        res.json(user);
    }).catch((err) => {
        console.error(err);
    });
}

export function update(req, res, next) {
    let { id } = req.params;
    let { email, firstname, lastname, password } = req.body;

    UserValidators.update({
        id,
        email,
        firstname,
        lastname,
        password
    }).then((sqlArgs) => {
        return UserProcedures.update(sqlArgs);
    }).then((user) => {
        res.json(user);
    }).catch((err) => {
        console.error(err);
    });
}

export function destroy(req, res, next) {
    let { id } = req.params;

    UserValidators.read({
        id,
    }).then((sqlArgs) => {
        return UserProcedures.destroy(sqlArgs);
    }).then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        console.error(err);
    });
}