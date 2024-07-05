// src/routes/moduleRoutes.js
const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware');
const moduleController = require('../controllers/moduleController');

const router = express.Router({ mergeParams: true });

router.post('/courses/:courseId/modules', authenticateToken, moduleController.createModule);
router.get('/courses/:courseId/modules', authenticateToken, moduleController.getModulesByCourseId);

module.exports = router;