// src/routes/enrollmentRoutes.js
const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware');
const enrollmentController = require('../controllers/enrollmentController');

const router = express.Router();

router.post('/enrollments', authenticateToken, enrollmentController.enroll);
router.get('/enrollments', authenticateToken, enrollmentController.getByUserId);
router.delete('/enrollments/:id', authenticateToken, enrollmentController.unenroll);

module.exports = router;