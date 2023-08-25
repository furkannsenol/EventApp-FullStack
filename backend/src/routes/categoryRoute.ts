import express from 'express';
import { categoryController } from '../controllers/categoryController';
import apiKeyMiddleware from '../utils/apiKeyController';

const router = express.Router();
//router.use(verifyToken);

router.get('/', apiKeyMiddleware, categoryController.getAllCategories);
router.post('/', categoryController.createCategory)

export default router;