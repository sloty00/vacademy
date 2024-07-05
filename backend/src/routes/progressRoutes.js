// src/routes/progressRoutes.js
const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware');
const progressController = require('../controllers/progressController');

const router = express.Router({ mergeParams: true });

router.post('/users/:userId/videos/:videoId/progress', authenticateToken, progressController.markVideoAsCompleted);
router.get('/users/:userId/progress', authenticateToken, progressController.getProgressByUserId);

module.exports = router;