// src/services/examService.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createExam = async (moduleId, examData) => {
  const { title, questions } = examData;

  // Convertir el objeto questions a JSON
  const questionsJSON = JSON.stringify(questions);

  const exam = await prisma.exam.create({
    data: {
      title: title,
      questions: questionsJSON, // Pasar la versión JSON de las preguntas
      moduleId: parseInt(moduleId)
    },
    include: {
      module: true
    }
  });

  return exam;
};

const getExamsByModuleId = async (moduleId) => {
  const exams = await prisma.exam.findMany({
    where: {
      moduleId: parseInt(moduleId, 10),
    },
    include: {
      module: true,
    },
  });

  return exams;
};

module.exports = {
  createExam,
  getExamsByModuleId,
};