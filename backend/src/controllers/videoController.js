// src/controllers/videoController.js
const videoService = require('../services/videoService');

// Crear un video para un módulo específico
const createVideo = async (req, res) => {
  try {
    const { moduleId } = req.params;
    const videoData = {
      title: req.body.title,
      url: req.body.url,
      // Puedes agregar más campos según sea necesario
    };

    const video = await videoService.createVideo(moduleId, videoData);
    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los videos de un módulo específico
const getVideosByModuleId = async (req, res) => {
  try {
    const { moduleId } = req.params;

    const videos = await videoService.getVideosByModuleId(moduleId);
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createVideo,
  getVideosByModuleId,
};