import { Router } from 'express';
import authRouter from './auth';
import usersRouter from './users';
import postsRouter from './posts';
import tagsRouter from './tags';
import favoritesRouter from './favorites';
import playersRouter from './players';
import newsRouter from './nbaNews';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

//router.route('*')
//    .post(tokenMiddleware, isLoggedIn)
//    .put(tokenMiddleware, isLoggedIn)
//    .delete(tokenMiddleware, isLoggedIn);

export default router
    .use('/auth', authRouter)
    .use('/users', usersRouter)
    .use('/posts', postsRouter)
    .use('/tags', tagsRouter)
    .use('/favorites', favoritesRouter)
    .use('/players', playersRouter)
    .use('/news', newsRouter)