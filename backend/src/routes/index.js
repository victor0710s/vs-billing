import { Router } from 'express';

import authRoutes from './auth.routes.js';
// import userRoutes from './user.routes.js';

const routes = Router();

// rotas públicas
routes.use('/auth', authRoutes);

// rotas privadas
// routes.use('/users', userRoutes);

export default routes;