// src/controllers/examController.js
const examService = require('../services/examService');

// Crear un examen para un módulo
const createExam = async (req, res) => {
  try {
    const { moduleId } = req.params;
    const examData = {
      title: req.body.title,
      questions: req.body.questions, // Ajusta según el formato que uses para las preguntas
    };

    const exam = await examService.createExam(moduleId, examData);
    res.status(201).json(exam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los exámenes de un módulo
const getExamsByModuleId = async (req, res) => {
  try {
    const { moduleId } = req.params;

    const exams = await examService.getExamsByModuleId(moduleId);
    res.status(200).json(exams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createExam,
  getExamsByModuleId,
};