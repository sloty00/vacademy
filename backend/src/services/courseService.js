// src/services/courseService.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createCourse = async (title, description) => {
  const course = await prisma.course.create({
    data: {
      title,
      description,
    },
  });
  return course;
};

const getAllCourses = async () => {
  const courses = await prisma.course.findMany();
  return courses;
};

const getCourseById = async (id) => {
  const course = await prisma.course.findUnique({
    where: { id: parseInt(id) },
  });
  return course;
};

const updateCourse = async (id, title, description) => {
  const course = await prisma.course.update({
    where: { id: parseInt(id) },
    data: {
      title,
      description,
    },
  });
  return course;
};

const deleteCourse = async (id) => {
  await prisma.course.delete({
    where: { id: parseInt(id) },
  });
};

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};