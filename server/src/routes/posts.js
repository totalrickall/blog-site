import { Router } from 'express';
import * as Posts from '../controllers/posts.ctrl';

let router = Router();

export default router
    .get('/', Posts.all)
    .get('/:id', Posts.read)
    .get('/user/:userid', Posts.readByUserId)
    .get('/tag/:tagid', Posts.readByTagId)
    .post('/', Posts.create)
    .put('/:id', Posts.update)
    .delete('/:id', Posts.destroy)