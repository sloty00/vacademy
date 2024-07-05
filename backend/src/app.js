// src/app.js
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');
const examRoutes = require('./routes/examRoutes');
const moduleRoutes = require('./routes/moduleRoutes');
const progressRoutes = require('./routes/progressRoutes');
const videoRoutes = require('./routes/videoRoutes'); // Importar las rutas de video

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', courseRoutes);
app.use('/api', enrollmentRoutes);
app.use('/api', examRoutes);
app.use('/api', moduleRoutes);
app.use('/api', progressRoutes);
app.use('/api', videoRoutes); // Usar las rutas de video

module.exports = app;