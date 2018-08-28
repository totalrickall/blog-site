import * as PostValidators from '../validators/posts';
import * as PostProcedures from '../procedures/posts';

export function all(req, res, next) {
    PostProcedures.all().then((posts) => {
        res.json(posts);
    }).catch((err) => {
        console.error(err);
    });
}

export function read(req, res, next) {
    let { id } = req.params;

    PostValidators.read({
        id,
    }).then((sqlArgs) => {
        return PostProcedures.read(sqlArgs);
    }).then((post) => {
        res.json(post);
    }).catch((err) => {
        console.error(err);
    });
}

export function create(req, res, next) {
    let { userid, content, title } = req.body;

    PostValidators.create({
        userid,
        content,
        title,
    }).then((sqlArgs) => {
        return PostProcedures.create(sqlArgs);
    }).then((post) => {
        res.json(post)
    }).catch((err) => {
        console.error(err);
    });
}

export function update(req, res, next) {
    let { id } = req.params;
    let { userid, content, title } = req.body;

    PostValidators.update({
        id,
        userid,
        content,
        title,
    }).then((sqlArgs) => {
        return PostProcedures.update(sqlArgs);
    }).then((post) => {
        res.json(post);
    }).catch((err) => {
        console.error(err);
    });
}

export function destroy(req, res, next) {
    let { id } = req.params;

    PostValidators.read({
        id,
    }).then((sqlArgs) => {
        return PostProcedures.destroy(sqlArgs);
    }).then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        console.error(err);
    });
}

export function readByUserId(req, res, next) {
    let { userid } = req.params;

    PostValidators.readByUserId({
        userid,
    }).then((sqlArgs) => {
        return PostProcedures.readByUserId(sqlArgs);
    }).then((posts) => {
        res.json(posts);
    }).catch((err) => {
        console.error(err);
    });
}

export function readByTagId(req, res, next) {
    let { tagid } = req.params;

    PostValidators.readByTagId({
        tagid,
    }).then((sqlArgs) => {
        return PostProcedures.readByTagId(sqlArgs);
    }).then((posts) => {
        res.json(posts);
    }).catch((err) => {
        console.error(err);
    });
}