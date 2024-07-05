// src/controllers/moduleController.js
const moduleService = require('../services/moduleService');

// Crear un módulo para un curso
const createModule = async (req, res) => {
  try {
    const { courseId } = req.params;
    const moduleData = {
      title: req.body.title,
      // Puedes agregar más campos según sea necesario
    };

    const module = await moduleService.createModule(courseId, moduleData);
    res.status(201).json(module);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los módulos de un curso
const getModulesByCourseId = async (req, res) => {
  try {
    const { courseId } = req.params;

    const modules = await moduleService.getModulesByCourseId(courseId);
    res.status(200).json(modules);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createModule,
  getModulesByCourseId,
};