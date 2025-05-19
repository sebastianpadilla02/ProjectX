# ProjectX - Twitter/X Clone

## Description
ProjectX is a web application inspired by Twitter/X, allowing users to register, log in, post tweets, comment on posts, and like them. The application is developed with React, TypeScript, and Vite, offering a modern and responsive user interface.

## Key Features
- ✅ User registration
- ✅ Token-based authentication
- ✅ Tweet posting
- ✅ Commenting on posts
- ✅ Like system
- ✅ User profile
- ✅ Responsive design (mobile, tablet, desktop)

## Technologies Used
- React 19
- TypeScript
- Vite
- React Router DOM
- React Icons
- Custom CSS

## Prerequisites
- Node.js (version 18 or higher)
- npm or yarn
- Backend API running at `http://localhost:8083` (see Backend section)

## Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/projectx.git
cd projectx
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Run the project in development mode
```bash
npm run dev
# or
yarn dev
```

4. Open your browser at `http://localhost:5173` (or the port indicated by Vite in the terminal)

## Usage

### Public Routes
- `/login` - Login page
- `/register` - Registration page

### Private Routes (require authentication)
- `/home` - Main feed
- `/profile` - User profile

## Project Structure

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

## Backend API

The frontend communicates with a REST API that must be running at `http://localhost:8083`. The API should provide the following endpoints:

- `POST /api/users` - User registration
- `POST /api/users/login` - User login
- `GET /api/tweets` - Fetch tweets
- `POST /api/tweets` - Create a tweet
- `DELETE /api/tweets` - Delete a tweet
- `POST /api/tweets/likes` - Like a tweet
- `POST /api/tweets/comments` - Comment on a tweet

## Authors

[![Author](https://img.shields.io/badge/by-sebastianpadilla02-purple)](https://github.com/sebastianpadilla02) [![Author](https://img.shields.io/badge/by-lunajulio-blue)](https://github.com/lunajulio)



*Note: This project is a Twitter/X clone for educational and demonstration purposes.*