import { Router } from 'express';
import UserController from '@http/controllers/UserController';

const router = Router();

const userController = new UserController();

router.post('/user', userController.create);
router.get('/user/:id', userController.getUser);
router.get('/user', userController.getAllUsers);

router.post('/auth', userController.auth);

export default router;
