import express from 'express';
import { categoryController } from '../controllers/categoryController';
import apiKeyMiddleware from '../utils/apiKeyController';

const router = express.Router();
//router.use(verifyToken);

/** 
* @swagger
* /api/categories:
*   get:
*     summary: Get All Category
*     tags:
*       - Category
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
*                 $ref: '#/components/schemas/Category'
*/
router.get('/', apiKeyMiddleware, categoryController.getAllCategories);

/**
 * @swagger
 * /api/categories:
 *   post:
 *     summary: Create a new Category
 *     tags:
 *       - Category
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
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       '201':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */
router.post('/', apiKeyMiddleware, categoryController.createCategory)

export default router;