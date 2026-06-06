const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Marcar un video como completado por un usuario
const markVideoAsCompleted = async (userId, videoId) => {
  try {
    // Intentamos encontrar el progreso existente del usuario para este video
    let existingProgress = await prisma.progress.findUnique({
      where: {
        userId_videoId: {
          userId: parseInt(userId),
          videoId: parseInt(videoId)
        }
      }
    });

    // Si no existe, lo creamos
    if (!existingProgress) {
      existingProgress = await prisma.progress.create({
        data: {
          userId: parseInt(userId),
          videoId: parseInt(videoId),
          completed: true
        }
      });
    } else {
      // Si ya existe, actualizamos el progreso a completado
      existingProgress = await prisma.progress.update({
        where: {
          id: existingProgress.id
        },
        data: {
          completed: true
        }
      });
    }

    return existingProgress;
  } catch (error) {
    console.error('Error marking video as completed:', error);
    throw error;
  }
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