// src/services/moduleService.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Crear un módulo para un curso específico
const createModule = async (courseId, moduleData) => {
  const module = await prisma.module.create({
    data: {
      ...moduleData,
      courseId: parseInt(courseId),
    },
    include: {
      course: true, // Incluir detalles del curso relacionado
    },
  });
  return module;
};

// Obtener todos los módulos de un curso
const getModulesByCourseId = async (courseId) => {
  const modules = await prisma.module.findMany({
    where: {
      courseId: parseInt(courseId),
    },
    include: {
      course: true, // Incluir detalles del curso relacionado
      videos: true, // Incluir todos los videos del módulo
      exams: true, // Incluir todos los exámenes del módulo
    },
  });
  return modules;
};

module.exports = {
  createModule,
  getModulesByCourseId,
};