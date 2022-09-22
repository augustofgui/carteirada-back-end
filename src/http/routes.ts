import { Router } from 'express';
import CreateUserController from './controllers/CreateUserController';

const router = Router();

const createUser = new CreateUserController();

router.post('/user', createUser.handle);
router.get('/user', (request, response) => {
	response.json({ "Hello World": "ok!" });
});

export default router;
