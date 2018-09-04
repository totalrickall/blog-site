import { Router } from 'express';
import * as Tags from '../controllers/tags.ctrl';

let router = Router();

export default router
    .get('/', Tags.all)
    .get('/:id', Tags.read)
    .post('/', Tags.create)
    .put('/:id', Tags.update)
    .delete('/:id', Tags.destroy)