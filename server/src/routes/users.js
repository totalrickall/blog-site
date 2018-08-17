import { Router } from 'express';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
import * as Users from '../controllers/users.ctrl';

let router = Router();

router
    .get('/', Users.all)
    .get('/:id', Users.read)
    .get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
        res.json(req.user);
    })
    .post('/', Users.create)
    .put('/:id', Users.update)
    .delete('/:id', Users.destroy);

export default router; 