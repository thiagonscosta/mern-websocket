import { UserController } from './controllers/user.controller';

import { Router } from 'express';
const routes = Router();

const userController = new UserController();

routes.post("/api/user", routes);


export { routes };