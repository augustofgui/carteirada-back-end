import { Router } from 'express';
import UserController from './controllers/CreateUserController';

const router = Router();

const userController = new UserController();

router.post('/user', userController.create);
router.get('/user/:id', userController.getUser);
router.get('/user', userController.getAllUsers);

export default router;
