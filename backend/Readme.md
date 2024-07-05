<!-- Project Title -->
<h1 align="center">Backend de VAcademy</h1>

<!-- Project Description -->
<p align="center">
  Este es el backend del proyecto VAcademy, una plataforma educativa desarrollada con Node.js, Express, y Prisma ORM.
</p>

<!-- Shields -->
<p align="center">
  <img src="https://img.shields.io/badge/Node.js-v20.12.2-green" alt="Node.js Version">
  <img src="https://img.shields.io/badge/Prisma-v5.16.1-blue" alt="Prisma Version">
  <img src="https://img.shields.io/badge/MySQL-v3.10.2-blue" alt="MySQL Version">
  <img src="https://img.shields.io/badge/License-ISC-yellow" alt="License">
</p>

<!-- Table of Contents -->
## Contenido

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Seguridad](#seguridad)
- [Contribución](#contribución)
- [Licencia](#licencia)

<!-- Requirements -->
## Requisitos

- Node.js
- MySQL
- Prisma ORM
- Nodemon (solo para desarrollo)

<!-- Installation Instructions -->
## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone <url-del-repositorio>
   cd backend
   npm install

2. **Configura las variables de entorno:**

Crea un archivo .env en el directorio raíz del proyecto y agrega las siguientes variables:

   DATABASE_URL=mysql://username:password@localhost:3306/database_name
   JWT_SECRET=your_jwt_secret_key
   PORT=3000

Ajusta DATABASE_URL con tus credenciales de MySQL y el nombre de la base de datos.

3.- Ejecuta las migraciones de Prisma:

Copiar código
npx prisma migrate dev --name init

Esto ejecutará las migraciones y creará las tablas necesarias en tu base de datos.

Uso
Inicia el servidor:

Para desarrollo (con Nodemon):

bash
Copiar código
npm run dev
Para producción:

bash
Copiar código
npm start
Endpoints API:

Registro y autenticación de usuarios
Gestión de cursos, módulos, videos y exámenes
Enrolamiento de usuarios en cursos
Seguimiento de progreso de usuarios en módulos y videos
<!-- Security -->
Seguridad
Se utiliza JWT para la autenticación y protección de rutas.
Las contraseñas de los usuarios se almacenan en la base de datos encriptadas utilizando bcrypt.
<!-- Contribution Guidelines -->
Contribución
Si quieres contribuir al proyecto, sigue estos pasos:

Haz un fork del repositorio.
Crea una rama para tu nueva funcionalidad (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commit (git commit -am 'Añade nueva funcionalidad').
Haz push a la rama (git push origin feature/nueva-funcionalidad).
Crea un nuevo Pull Request.
<!-- License Information -->
Licencia
Este proyecto está bajo la Licencia ISC.


