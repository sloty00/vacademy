// src/routes/examRoutes.js
const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware');
const examController = require('../controllers/examController');

const router = express.Router({ mergeParams: true });

/**
 * @swagger
 * /api/modules/{moduleId}/exams:
 *   post:
 *     summary: Create an exam for a module
 *     tags: 
 *       - Exams
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: moduleId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the module
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               questions:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     questionText:
 *                       type: string
 *                     options:
 *                       type: array
 *                       items:
 *                         type: string
 *                     correctAnswer:
 *                       type: string
 *     responses:
 *       201:
 *         description: Exam created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 moduleId:
 *                   type: string
 *                 questions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       questionText:
 *                         type: string
 *                       options:
 *                         type: array
 *                         items:
 *                           type: string
 *                       correctAnswer:
 *                         type: string
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.post('/modules/:moduleId/exams', authenticateToken, examController.createExam);

/**
 * @swagger
 * /api/modules/{moduleId}/exams:
 *   get:
 *     summary: Get all exams for a module
 *     tags: 
 *       - Exams
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: moduleId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the module
 *     responses:
 *       200:
 *         description: List of exams
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
 *                   moduleId:
 *                     type: string
 *                   questions:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         questionText:
 *                           type: string
 *                         options:
 *                           type: array
 *                           items:
 *                             type: string
 *                         correctAnswer:
 *                           type: string
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get('/modules/:moduleId/exams', authenticateToken, examController.getExamsByModuleId);

module.exports = router;