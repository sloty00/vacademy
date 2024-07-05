// src/routes/courseRoutes.js
const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware');
const { create, getAll, getById, update, remove } = require('../controllers/courseController');

const router = express.Router();

router.post('/courses', authenticateToken, create);
router.get('/courses', authenticateToken, getAll);
router.get('/courses/:id', authenticateToken, getById);
router.put('/courses/:id', authenticateToken, update);
router.delete('/courses/:id', authenticateToken, remove);

module.exports = router;