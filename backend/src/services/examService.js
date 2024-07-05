// src/services/examService.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Crear un examen para un módulo específico
const createExam = async (moduleId, examData) => {
  const exam = await prisma.exam.create({
    data: {
      ...examData,
      moduleId: parseInt(moduleId),
    },
    include: {
      module: true, // Incluir detalles del módulo relacionado
    },
  });
  return exam;
};

// Obtener todos los exámenes de un módulo
const getExamsByModuleId = async (moduleId) => {
  const exams = await prisma.exam.findMany({
    where: {
      moduleId: parseInt(moduleId),
    },
    include: {
      module: true, // Incluir detalles del módulo relacionado
    },
  });
  return exams;
};

module.exports = {
  createExam,
  getExamsByModuleId,
};