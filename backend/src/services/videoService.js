// src/services/videoService.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Crear un video para un módulo específico
const createVideo = async (moduleId, videoData) => {
  const video = await prisma.video.create({
    data: {
      ...videoData,
      moduleId: parseInt(moduleId),
    },
    include: {
      module: true, // Incluir detalles del módulo relacionado
    },
  });
  return video;
};

// Obtener todos los videos de un módulo específico
const getVideosByModuleId = async (moduleId) => {
  const videos = await prisma.video.findMany({
    where: {
      moduleId: parseInt(moduleId),
    },
    include: {
      module: true, // Incluir detalles del módulo relacionado
      progresses: true, // Incluir el progreso de cada video
    },
  });
  return videos;
};

module.exports = {
  createVideo,
  getVideosByModuleId,
};