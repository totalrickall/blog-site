import { crud, SQL_READ, SQL_DESTROY } from './base';
import { rows, row, empty } from '../config/db';

const MODEL_NAME = `Favorite`;

export let { all, create, read, update, destroy } = crud(MODEL_NAME);

export function readByPostId(args) {
    return rows(`${SQL_READ}${MODEL_NAME}ByPostId`, args)
};

export function readByUserId(args) {
    return rows(`${SQL_READ}${MODEL_NAME}ByUserId`, args)
};

export function destroyByPostIdAndUserId(args) {
    return empty(`${SQL_DESTROY}${MODEL_NAME}ByPostIdAndUserId`, args)
};