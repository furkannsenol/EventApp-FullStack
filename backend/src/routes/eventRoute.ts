import express from 'express';
import apiKeyMiddleware from '../utils/apiKeyController';
import { eventController } from '../controllers/eventController';

const router = express.Router();
//router.use(verifyToken);

/** 
* @swagger
* /api/events/all:
*   get:
*     summary: Tüm etkinlikleri getirir
*     tags:
*       - Event
*     parameters:
*       - in: query
*         name: api_key
*         schema:
*           type: string
*         required: true
*         description: API anahtarı
*       - in: query
*         name: page
*         schema:
*           type: integer
*         required: false
*         description: Sayfa numarası (opsiyonel)
*     responses:
*       '200':
*         description: Success
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/Event'
*/
router.get('/all', apiKeyMiddleware, eventController.getAllEvents);

router.post('/', eventController.createEvent)

export default router;