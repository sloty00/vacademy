// src/routes/videoRoutes.js
const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware');
const videoController = require('../controllers/videoController');

const router = express.Router({ mergeParams: true });

router.post('/modules/:moduleId/videos', authenticateToken, videoController.createVideo);
router.get('/modules/:moduleId/videos', authenticateToken, videoController.getVideosByModuleId);

module.exports = router;