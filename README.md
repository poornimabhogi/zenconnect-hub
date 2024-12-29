# Full Stack Application

This is a full-stack application with a React frontend and NestJS backend.

## Project Structure

```
full-stack-app/
├── client/          # React frontend
└── server/          # NestJS backend
```

## Getting Started

### Backend (NestJS)

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Set up your PostgreSQL database and update the .env file with your database credentials.

4. Start the development server:
```bash
npm run start:dev
```

The server will be running on http://localhost:3000

### Frontend (React)

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be running on http://localhost:5173

## Features

- User authentication with JWT
- PostgreSQL database with TypeORM
- API documentation with Swagger
- React frontend with TypeScript
- Tailwind CSS for styling

## API Documentation

Once the server is running, you can access the Swagger API documentation at:
http://localhost:3000/api