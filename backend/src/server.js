// src/server.js
const app = require('./app'); // Asegúrate de que la ruta sea correcta
const http = require('http');
const dotenv = require('dotenv');
const setupSwagger = require('./swagger');

dotenv.config();

setupSwagger(app);

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});