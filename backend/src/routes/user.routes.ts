import { UserController } from '../controllers/user.controller';

import { Router } from 'express';
const routes = Router();

const userController = new UserController();

routes.post("/user", userController.register);
// routes.get("/users", userController.);

export default routes;