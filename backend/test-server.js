const app = require('./src/server.js'); // Ajusta la ruta si es necesario
const http = require('http');

const server = http.createServer(app);
server.listen(0, () => {
  console.log('Servidor iniciado correctamente para el test');
  process.exit(0);
});
