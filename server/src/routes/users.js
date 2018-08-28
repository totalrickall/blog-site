import { Router } from 'express';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
import * as Users from '../controllers/users.ctrl';

let router = Router();

router
    .get('/', tokenMiddleware, isLoggedIn, Users.all)
    .get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
        res.json(req.user);
    })
    .get('/:id', tokenMiddleware, isLoggedIn, Users.read)
    .post('/', tokenMiddleware, isLoggedIn, Users.create)
    .put('/:id', tokenMiddleware, isLoggedIn, Users.update)
    .delete('/:id', tokenMiddleware, isLoggedIn, Users.destroy);

export default router;