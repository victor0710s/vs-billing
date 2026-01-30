import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { dashboardController } from '../controllers/DashboardController.js';

const router = Router();

router.get('/dashboard', authMiddleware, dashboardController);

export default router;