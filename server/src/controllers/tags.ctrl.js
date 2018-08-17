import * as TagValidators from '../validators/tags';
import * as TagProcedures from '../procedures/tags';

export function all(req, res, next) {
    TagProcedures.all().then((tags) => {
        res.json(tags);
    }).catch((err) => {
        console.error(err);
    });
}

export function read(req, res, next) {
    let { id } = req.params;

    TagValidators.read({
        id,
    }).then((sqlArgs) => {
        return TagProcedures.read(sqlArgs);
    }).then((tag) => {
        res.json(tag);
    }).catch((err) => {
        console.error(err);
    });
}

export function create(req, res, next) {
    let { name } = req.body;

    TagValidators.create({
        name,
    }).then((sqlArgs) => {
        return TagProcedures.create(sqlArgs);
    }).then((tag) => {
        res.json(tag);
    }).catch((err) => {
        console.error(err);
    });
}

export function update(req, res, next) {
    let { id } = req.params;
    let { name } = req.body;

    TagValidators.update({
        id,
        name,
    }).then((sqlArgs) => {
        return TagProcedures.update(sqlArgs);
    }).then((tag) => {
        res.json(tag);
    }).catch((err) => {
        console.error(err);
    });
}

export function destroy(req, res, next) {
    let { id } = req.params;

    TagValidators.read({
        id,
    }).then((sqlArgs) => {
        return TagProcedures.destroy(sqlArgs);
    }).then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        console.error(err);
    });
}