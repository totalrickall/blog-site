import { crud } from './base';

const MODEL_NAME = `User`;

export let { all, create, read, update, destroy } = crud(MODEL_NAME);