import express from 'express';
import apiKeyMiddleware from '../utils/apiKeyController';
import { eventController } from '../controllers/eventController';

const router = express.Router();
//router.use(verifyToken);

/** 
* @swagger
* /api/events/all:
*   get:
*     summary: Get All Events (sort by date)
*     tags:
*       - Event
*     parameters:
*       - in: query
*         name: api_key
*         schema:
*           type: string
*         required: true
*         description: API key value
*       - in: query
*         name: page
*         schema:
*           type: integer
*         required: false
*         description: Page number (optional)
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

/**
 * @swagger
 * /api/events:
 *   post:
 *     summary: Create a new Event
 *     tags:
 *       - Event
 *     parameters:
 *       - in: query
 *         name: api_key
 *         schema:
 *           type: string
 *         required: true
 *         description: API key value
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       '201':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 */
router.post('/', apiKeyMiddleware, eventController.createEvent)

/** 
* @swagger
* /api/events/popular:
*   get:
*     summary: Get Popular Events (sort by date)
*     tags:
*       - Event
*     parameters:
*       - in: query
*         name: api_key
*         schema:
*           type: string
*         required: true
*         description: API key value
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
router.get('/popular', apiKeyMiddleware, eventController.getPopularEvents);


export default router;