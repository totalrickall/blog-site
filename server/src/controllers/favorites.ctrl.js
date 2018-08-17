import * as FavoriteValidators from '../validators/favorites';
import * as FavoriteProcedures from '../procedures/favorites';

export function all(req, res, next) {
    FavoriteProcedures.all().then((favorites) => {
        res.json(favorites);
    }).catch((err) => {
        console.error(err);
    });
}

export function read(req, res, next) {
    let { id } = req.params;

    FavoriteValidators.read({
        id,
    }).then((sqlArgs) => {
        return FavoriteProcedures.read(sqlArgs);
    }).then((favorite) => {
        res.json(favorite);
    }).catch((err) => {
        console.error(err);
    });
}

export function create(req, res, next) {
    let { postid, userid } = req.body;
    
    FavoriteValidators.create({
        postid,
        userid,
    }).then((sqlArgs) => {
        return FavoriteProcedures.create(sqlArgs);
    }).then((favorite) => {
        res.json(favorite);
    }).catch((err) => {
        console.error(err);
    });
}

export function update(req, res, next) {
    let { id } = req.params;
    let { postid, userid } = req.body;

    FavoriteValidators.update({
        id,
        postid,
        userid,
    }).then((sqlArgs) => {
        return FavoriteProcedures.update(sqlArgs);
    }).then((favorite) => {
        res.json(favorite);
    }).catch((err) => {
        console.error(err);
    });
}

export function destroy(req, res, next) {
    let { id } = req.params;

    FavoriteValidators.read({
        id,
    }).then((sqlArgs) => {
        return FavoriteProcedures.destroy(sqlArgs);
    }).then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        console.error(err);
    });
}

export function readByPostId(req, res, next) {
    let { postid } = req.params;

    FavoriteValidators.readByPostId({
        postid,
    }).then((sqlArgs) => {
        return FavoriteProcedures.readByPostId(sqlArgs);
    }).then((favorite) => {
        res.json(favorite);
    }).catch((err) => {
        console.error(err);
    });
}

export function readByUserId(req, res, next) {
    let { userid } = req.params;

    FavoriteValidators.readByUserId({
        userid,
    }).then((sqlArgs) => {
        return FavoriteProcedures.readByUserId(sqlArgs);
    }).then((favorite) => {
        res.json(favorite);
    }).catch((err) => {
        console.error(err);
    });
}

export function destroyByPostIdAndUserId(req, res, next) {
    let { postid, userid } = req.body;

    FavoriteValidators.destroyByPostIdAndUserId({
        postid,
        userid,
    }).then((sqlArgs) => {
        return FavoriteProcedures.destroyByPostIdAndUserId(sqlArgs);
    }).then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        console.error(err);
    });
}