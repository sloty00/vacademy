// src/controllers/enrollmentController.js
const enrollmentService = require('../services/enrollmentService');

// Matricular un usuario en un curso
const enroll = async (req, res) => {
  try {
    const { userId } = req.user; // Suponiendo que req.user contiene el ID del usuario autenticado
    const { courseId } = req.body;

    const enrollment = await enrollmentService.enrollUserInCourse(userId, courseId);
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todas las matrículas de un usuario
const getByUserId = async (req, res) => {
  try {
    const { userId } = req.user; // Suponiendo que req.user contiene el ID del usuario autenticado

    const enrollments = await enrollmentService.getEnrollmentsByUserId(userId);
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una matrícula por su ID
const unenroll = async (req, res) => {
  try {
    const { id } = req.params;

    await enrollmentService.deleteEnrollment(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  enroll,
  getByUserId,
  unenroll,
};