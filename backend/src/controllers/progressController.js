// src/controllers/progressController.js
const progressService = require('../services/progressService');

// Marcar un video como completado por un usuario
const markVideoAsCompleted = async (req, res) => {
  try {
    const { userId, videoId } = req.params;

    const progress = await progressService.markVideoAsCompleted(userId, videoId);
    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener el progreso de un usuario en todos los videos
const getProgressByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    const progress = await progressService.getProgressByUserId(userId);
    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  markVideoAsCompleted,
  getProgressByUserId,
};