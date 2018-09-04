import { Router } from 'express';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
import * as Users from '../controllers/users.ctrl';

let router = Router();

export default router
    .get('/', Users.all)
    .get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
        res.json(req.user);
    })
    .get('/:id', Users.read)
    .post('/', Users.create)
    .put('/:id', Users.update)
    .delete('/:id', Users.destroy)