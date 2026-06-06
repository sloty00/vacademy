// src/routes/videoRoutes.js
const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware');
const videoController = require('../controllers/videoController');

const router = express.Router({ mergeParams: true });

/**
 * @swagger
 * /api/modules/{moduleId}/videos:
 *   post:
 *     summary: Create a video for a module
 *     tags: 
 *       - Videos
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
 *               url:
 *                 type: string
 *     responses:
 *       201:
 *         description: Video created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 url:
 *                   type: string
 *                 moduleId:
 *                   type: string
 *                 module:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     courseId:
 *                       type: string
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.post('/modules/:moduleId/videos', authenticateToken, videoController.createVideo);

/**
 * @swagger
 * /api/modules/{moduleId}/videos:
 *   get:
 *     summary: Get all videos for a module
 *     tags: 
 *       - Videos
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
 *         description: List of videos
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
 *                   url:
 *                     type: string
 *                   moduleId:
 *                     type: string
 *                   module:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       title:
 *                         type: string
 *                       courseId:
 *                         type: string
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get('/modules/:moduleId/videos', authenticateToken, videoController.getVideosByModuleId);

module.exports = router;