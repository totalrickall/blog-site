import { Router } from 'express';
import * as Favorites from '../controllers/favorites.ctrl';

let router = Router();

router
    .get('/', Favorites.all)
    .get('/:id', Favorites.read)
    .get('/post/:postid', Favorites.readByPostId)
    .get('/user/:userid', Favorites.readByUserId)
    .post('/', Favorites.create)
    .put('/:id', Favorites.update)
    .delete('/:id', Favorites.destroy)
    .delete('/', Favorites.destroyByPostIdAndUserId);


export default router;