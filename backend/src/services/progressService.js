// src/services/progressService.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Marcar un video como completado por un usuario
const markVideoAsCompleted = async (userId, videoId) => {
  const progress = await prisma.progress.upsert({
    where: {
      userId_videoId: {
        userId: parseInt(userId),
        videoId: parseInt(videoId),
      },
    },
    update: {
      completed: true,
    },
    create: {
      userId: parseInt(userId),
      videoId: parseInt(videoId),
      completed: true,
    },
  });
  return progress;
};

// Obtener el progreso de un usuario en todos los videos
const getProgressByUserId = async (userId) => {
  const progress = await prisma.progress.findMany({
    where: {
      userId: parseInt(userId),
    },
    include: {
      video: true, // Incluir detalles del video relacionado
    },
  });
  return progress;
};

module.exports = {
  markVideoAsCompleted,
  getProgressByUserId,
};