import express from 'express';
import apiKeyMiddleware from '../utils/apiKeyController';
import { eventController } from '../controllers/eventController';

const router = express.Router();
//router.use(verifyToken);

router.get('/', apiKeyMiddleware, eventController.getAllEvents);
router.post('/', eventController.createEvent)

export default router;