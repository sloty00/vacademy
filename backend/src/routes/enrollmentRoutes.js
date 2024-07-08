// src/routes/enrollmentRoutes.js
const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware');
const enrollmentController = require('../controllers/enrollmentController');

const router = express.Router();

/**
 * @swagger
 * /api/enrollments:
 *   post:
 *     summary: Enroll a user in a course
 *     tags: 
 *       - Enrollments
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               courseId:
 *                 type: string
 *                 description: ID of the course to enroll in
 *     responses:
 *       201:
 *         description: User enrolled successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.post('/enrollments', authenticateToken, enrollmentController.enroll);

/**
 * @swagger
 * /api/enrollments:
 *   get:
 *     summary: Get all enrollments for a user
 *     tags: 
 *       - Enrollments
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of enrollments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   courseId:
 *                     type: string
 *                   userId:
 *                     type: string
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get('/enrollments', authenticateToken, enrollmentController.getByUserId);

/**
 * @swagger
 * /api/enrollments/{id}:
 *   delete:
 *     summary: Unenroll a user from a course
 *     tags: 
 *       - Enrollments
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Enrollment ID
 *     responses:
 *       204:
 *         description: Enrollment deleted successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.delete('/enrollments/:id', authenticateToken, enrollmentController.unenroll);

module.exports = router;