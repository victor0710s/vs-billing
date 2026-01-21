import { Router } from 'express';
import { AuthController } from '../controllers/AuthController.js';

// Const router recebe o metodo Router do express
const routes = Router();
// Const authController recebe uma nova instancia da class AuthController
const authController = new AuthController();

// Rota POST para /sign-in que chama o metodo signIn do authController
routes.post('/sign-in', authController.signIn)

export default routes;