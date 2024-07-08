// src/routes/moduleRoutes.js
const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware');
const moduleController = require('../controllers/moduleController');

const router = express.Router({ mergeParams: true });

/**
 * @swagger
 * /api/courses/{courseId}/modules:
 *   post:
 *     summary: Create a module for a course
 *     tags: 
 *       - Modules
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: courseId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the course
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the module
 *     responses:
 *       201:
 *         description: Module created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 courseId:
 *                   type: string
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.post('/courses/:courseId/modules', authenticateToken, moduleController.createModule);

/**
 * @swagger
 * /api/courses/{courseId}/modules:
 *   get:
 *     summary: Get all modules for a course
 *     tags: 
 *       - Modules
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: courseId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the course
 *     responses:
 *       200:
 *         description: List of modules
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   courseId:
 *                     type: string
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get('/courses/:courseId/modules', authenticateToken, moduleController.getModulesByCourseId);

module.exports = router;