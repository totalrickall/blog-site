import { crud, SQL_READ } from './base';
import { rows, row, empty } from '../config/db';

const MODEL_NAME = `Post`;

export let { all, create, read, update, destroy } = crud(MODEL_NAME);

export function readByUserId(args) {
    return rows(`${SQL_READ}${MODEL_NAME}ByUserId`, args)
};

export function readByTagId(args) {
    return rows(`${SQL_READ}${MODEL_NAME}ByTagId`, args)
};