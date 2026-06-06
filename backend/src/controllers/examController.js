// src/controllers/examController.js
const examService = require('../services/examService');

// Crear un examen para un módulo
const createExam = async (req, res) => {
  try {
    const { moduleId } = req.params;
    const { title, questions } = req.body;

    const exam = await examService.createExam(moduleId, { title, questions });

    res.status(201).json(exam);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Error creating exam: ${error.message}` });
  }
};

// Obtener todos los exámenes de un módulo
const getExamsByModuleId = async (req, res) => {
  try {
    const { moduleId } = req.params;

    const exams = await examService.getExamsByModuleId(moduleId);
    res.status(200).json(exams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createExam,
  getExamsByModuleId,
};