# Protecto personal en ejecución Fullstack VAcademy

## Descripción

Fullstack VAcademy es una plataforma educativa desarrollada para ofrecer cursos en línea con seguimiento de progreso y evaluaciones por módulos. Este repositorio contiene tanto el backend como el frontend del proyecto.
Se adjunta el Video con la integracion del Swagger: https://youtu.be/irr8NVixNuM

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
- **Encriptación de contraseñas con bcrypt**: ![bcrypt](https://img.shields.io/badge/bcrypt-007396?logo=npm&logoColor=white)

### Integración de Swagger y Paginación

Para documentar y facilitar el acceso a la API del backend de VAcademy, se ha implementado Swagger. Además, se ha incorporado lógica de paginación en las rutas que devuelven listados de recursos, como cursos y usuarios, para mejorar el rendimiento y la navegación dentro de la plataforma.

## Frontend (En desarrollo)

El frontend de VAcademy está desarrollado con React.js y utiliza Framer Motion para animaciones interactivas. Proporciona una interfaz de usuario moderna y fluida para que los usuarios puedan explorar cursos, enrolarse, y seguir su progreso educativo.

### Frontend: Arquitectura de Componentes.

En el frontend de VAcademy, se utilizará una arquitectura basada en componentes, común en el desarrollo de aplicaciones React:

Componentes Reutilizables: Divide la interfaz de usuario en componentes pequeños y reutilizables que representan partes específicas de la interfaz.
- Separación de Responsabilidades: Cada componente tiene su propia lógica y presentación, lo que facilita el mantenimiento y la modificación.
- Gestión de Estado: Puede utilizar Context API, Redux u otros estados de gestión para manejar el estado de la aplicación de manera global o local en los componentes.
- Flujo de Datos Unidireccional: Sigue un patrón de flujo de datos unidireccional, donde los datos fluyen desde los componentes principales a los secundarios mediante props o context.
- En el frontend de VAcademy, los componentes React se organizarán de manera que cada uno cumpla con una función específica dentro de la interfaz de usuario. Se utilizará Framer Motion para animaciones y transiciones fluidas entre componentes, mejorando la experiencia de usuario.

Estos principios arquitecturales ayudarán a mantener un código modular, escalable y fácil de mantener tanto en el backend como en el frontend de tu proyecto Fullstack VAcademy.

### Tecnologías Utilizadas

- **React.js**: ![React.js](https://img.shields.io/badge/React.js-61DAFB?logo=react&logoColor=white)
- **Framer Motion**: ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=white)
- **Axios para llamadas a la API**: ![Axios](https://img.shields.io/badge/Axios-0095D5?logo=axios&logoColor=white)
- **Context API (para gestión de estado)**: ![Context API](https://img.shields.io/badge/Context_API-3178C6?logo=react&logoColor=white)
- **React Router (para enrutamiento)**: ![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=reactrouter&logoColor=white)
