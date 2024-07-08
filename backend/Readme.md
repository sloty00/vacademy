# Protecto personal en ejecución Fullstack VAcademy

## Descripción

Fullstack VAcademy es una plataforma educativa desarrollada para ofrecer cursos en línea con seguimiento de progreso y evaluaciones por módulos. Este repositorio contiene tanto el backend como el frontend del proyecto.

## Backend (Terminado)

El backend de VAcademy está desarrollado con Node.js, Express.js, y Prisma ORM. Utiliza MySQL como base de datos y cuenta con funcionalidades como registro y autenticación de usuarios, gestión de cursos, módulos, videos, exámenes, y seguimiento de progreso de usuarios.

### Backend: Patrón Repository.

El patrón Repository es una arquitectura de software que se utiliza comúnmente en el desarrollo de aplicaciones backend para separar las capas de acceso a datos de la lógica de negocio. 

### Tecnologías Utilizadas

- **Node.js**: ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
- **Express.js**: ![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)
- **Prisma ORM**: ![Prisma ORM](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)
- **MySQL**: ![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)
- **JWT para autenticación**: ![JWT](https://img.shields.io/badge/JWT-000000?logo=jsonwebtokens&logoColor=white)
- **Swagger**: ![Swagger](https://img.shields.io/badge/Swagger-%2344AA99.svg?logo=swagger&logoColor=white)
- **Encriptación de contraseñas con bcrypt**: ![bcrypt](https://img.shields.io/badge/bcrypt-007396?logo=npm&logoColor=white)

### Integración de Swagger y Paginación

Para documentar y facilitar el acceso a la API del backend de VAcademy, se ha implementado Swagger. Además, se ha incorporado lógica de paginación en las rutas que devuelven listados de recursos, como cursos y usuarios, para mejorar el rendimiento y la navegación dentro de la plataforma.
