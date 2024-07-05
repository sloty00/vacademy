// src/server.js
const app = require('./app'); // Asegúrate de que la ruta sea correcta
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});