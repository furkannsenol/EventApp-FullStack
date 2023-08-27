import express from 'express';
import { categoryController } from '../controllers/categoryController';
import apiKeyMiddleware from '../utils/apiKeyController';

const router = express.Router();
//router.use(verifyToken);

/** 
* @swagger
* /api/categories:
*   get:
*     summary: Tüm kategorileri getirir
*     tags:
*       - Category
*     parameters:
*       - in: query
*         name: api_key
*         schema:
*           type: string
*         required: true
*         description: API anahtarı
*     responses:
*       '200':
*         description: Başarılı yanıt
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
 *     summary: Yeni bir kategori oluştur
 *     tags:
 *       - Category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       '201':
 *         description: Başarılı yanıt
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */
router.post('/', categoryController.createCategory)

export default router;