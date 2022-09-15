import { Router } from 'express';
import CreateUserController from '../controllers/CreateUserController';

const router = Router();

const createUser = new CreateUserController();

router.post('/user', createUser.handle);

export default router;
