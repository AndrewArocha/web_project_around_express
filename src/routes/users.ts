// Router for Users

import { Router } from 'express';
import { getUsers, createUser, getUserById } from '../controllers/users.js';

const usersRouter = Router();

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getUserById);
usersRouter.post('/', createUser);

export default usersRouter;