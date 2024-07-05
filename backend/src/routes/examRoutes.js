// src/routes/examRoutes.js
const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware');
const examController = require('../controllers/examController');

const router = express.Router({ mergeParams: true });

router.post('/modules/:moduleId/exams', authenticateToken, examController.createExam);
router.get('/modules/:moduleId/exams', authenticateToken, examController.getExamsByModuleId);

module.exports = router;