// src/services/enrollmentService.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Crear una matrícula
const enrollUserInCourse = async (userId, courseId) => {
  const enrollment = await prisma.enrollment.create({
    data: {
      userId: parseInt(userId),
      courseId: parseInt(courseId),
    },
  });
  return enrollment;
};

// Obtener todas las matrículas de un usuario
const getEnrollmentsByUserId = async (userId) => {
  const enrollments = await prisma.enrollment.findMany({
    where: {
      userId: parseInt(userId),
    },
    include: {
      course: true, // Incluir detalles del curso relacionado
    },
  });
  return enrollments;
};

// Eliminar una matrícula por su ID
const deleteEnrollment = async (enrollmentId) => {
  await prisma.enrollment.delete({
    where: {
      id: parseInt(enrollmentId),
    },
  });
};

module.exports = {
  enrollUserInCourse,
  getEnrollmentsByUserId,
  deleteEnrollment,
};