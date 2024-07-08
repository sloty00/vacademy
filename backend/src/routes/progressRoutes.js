const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware');
const progressController = require('../controllers/progressController');

const router = express.Router({ mergeParams: true });

/**
 * @swagger
 * /api/users/{userId}/videos/{videoId}/progress:
 *   post:
 *     summary: Mark a video as completed by a user
 *     tags: 
 *       - Progress
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user
 *       - in: path
 *         name: videoId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the video
 *     responses:
 *       200:
 *         description: Video marked as completed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: string
 *                 videoId:
 *                   type: string
 *                 completed:
 *                   type: boolean
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.post('/users/:userId/videos/:videoId/progress', authenticateToken, progressController.markVideoAsCompleted);

/**
 * @swagger
 * /api/users/{userId}/progress:
 *   get:
 *     summary: Get progress of all videos for a user
 *     tags: 
 *       - Progress
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: User's video progress retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   userId:
 *                     type: string
 *                   video:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       title:
 *                         type: string
 *                       url:
 *                         type: string
 *                       # Añade más propiedades según sea necesario
 *                   completed:
 *                     type: boolean
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get('/users/:userId/progress', authenticateToken, progressController.getProgressByUserId);

module.exports = router;