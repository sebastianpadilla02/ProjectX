# ProjectX - Clon de Twitter/X

## Descripción
ProjectX es una aplicación web inspirada en Twitter/X, que permite a los usuarios registrarse, iniciar sesión, publicar tweets, comentar en publicaciones y dar "me gusta". La aplicación está desarrollada con React, TypeScript y Vite.

## Características principales
- ✅ Registro de usuarios
- ✅ Autenticación mediante tokens
- ✅ Publicación de tweets
- ✅ Comentarios en publicaciones
- ✅ Sistema de "me gusta"
- ✅ Perfil de usuario
- ✅ Diseño responsivo (móvil, tablet, desktop)

## Tecnologías utilizadas
- React 19
- TypeScript
- Vite
- React Router DOM
- React Icons
- CSS personalizado

## Requisitos previos
- Node.js (versión 18 o superior)
- npm o yarn
- API Backend ejecutándose en `http://localhost:8083` (ver sección de Backend)

## Instalación

1. Clona el repositorio
```bash
git clone https://github.com/tu-usuario/projectx.git
cd projectx
```

2. Instala las dependencias
```bash
npm install
# o
yarn
```

3. Ejecuta el proyecto en modo desarrollo
```bash
npm run dev
# o
yarn dev
```

4. Abre tu navegador en `http://localhost:5173` (o el puerto que Vite indique en la terminal)

## Uso

### Rutas públicas
- `/login` - Página de inicio de sesión
- `/register` - Página de registro

### Rutas privadas (requieren autenticación)
- `/home` - Feed principal
- `/profile` - Perfil del usuario

## Estructura del proyecto

```
ProjectX/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── private/
│   │   │   ├── layout/
│   │   │   │   ├── maincontent/
│   │   │   │   │   ├── tweetcomposer/
│   │   │   │   │   └── tweetlist/
│   │   │   │   └── sidebar/
│   │   │   └── profile/
│   │   └── public/
│   │       ├── login/
│   │       └── signup/
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## API Backend

El frontend se comunica con una API REST que debe estar ejecutándose en `http://localhost:8083`. La API debe proporcionar los siguientes endpoints:

- `POST /api/users` - Registro de usuarios
- `POST /api/users/login` - Inicio de sesión
- `GET /api/tweets` - Obtener tweets
- `POST /api/tweets` - Crear tweet
- `DELETE /api/tweets` - Eliminar tweet
- `POST /api/tweets/likes` - Dar "me gusta" a un tweet
- `POST /api/tweets/comments` - Comentar en un tweet


*Nota: Este proyecto es un clon de Twitter/X con fines educativos y de demostración.*