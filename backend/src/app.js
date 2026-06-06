// src/app.js
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');
const examRoutes = require('./routes/examRoutes');
const moduleRoutes = require('./routes/moduleRoutes');
const progressRoutes = require('./routes/progressRoutes');
const videoRoutes = require('./routes/videoRoutes'); // Importar las rutas de video

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de CORS
const corsOptions = {
    origin: 'http://localhost:3000', // Reemplaza con la URL desde la cual haces las solicitudes
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  app.use(cors(corsOptions));

app.use(cors(corsOptions)); // Configura CORS si es necesario

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', courseRoutes);
app.use('/api', enrollmentRoutes);
app.use('/api', examRoutes);
app.use('/api', moduleRoutes);
app.use('/api', progressRoutes);
app.use('/api', videoRoutes); // Usar las rutas de video

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;