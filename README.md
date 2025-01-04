# Full Stack Application

This is a full-stack application with a React frontend and NestJS backend.

## Project Structure

```
full-stack-app/
├── client/                    # React frontend
│   ├── public/
│   │   ├── icon-192x192.png
│   │   ├── icon-512x512.png
│   │   ├── manifest.json
│   │   ├── og-image.png
│   │   └── placeholder.svg
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   └── SignupForm.tsx
│   │   │   ├── games/
│   │   │   │   ├── Game2048.tsx
│   │   │   │   ├── GameBoard.tsx
│   │   │   │   └── GameTile.tsx
│   │   │   ├── marketplace/
│   │   │   │   ├── CategoryList.tsx
│   │   │   │   └── ProductList.tsx
│   │   │   ├── profile/
│   │   │   │   ├── ProfileHeader.tsx
│   │   │   │   ├── ProfilePosts.tsx
│   │   │   │   └── ProfileStats.tsx
│   │   │   ├── ui/
│   │   │   │   ├── accordion.tsx
│   │   │   │   ├── alert-dialog.tsx
│   │   │   │   ├── alert.tsx
│   │   │   │   └── [other UI components]
│   │   │   ├── BottomNav.tsx
│   │   │   ├── Layout.tsx
│   │   │   └── TopNav.tsx
│   │   │
│   │   ├── contexts/
│   │   │   ├── AuthContext.tsx
│   │   │   └── ZenCoinsContext.tsx
│   │   │
│   │   ├── hooks/
│   │   │   ├── use-mobile.tsx
│   │   │   ├── use-swipe.tsx
│   │   │   └── use-toast.ts
│   │   │
│   │   ├── lib/
│   │   │   ├── firebase.ts
│   │   │   └── utils.ts
│   │   │
│   │   ├── pages/
│   │   │   ├── Games.tsx
│   │   │   ├── Health.tsx
│   │   │   ├── Index.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── Marketplace.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── Social.tsx
│   │   │
│   │   ├── screens/
│   │   │   ├── GamesScreen.tsx
│   │   │   ├── HomeScreen.tsx
│   │   │   ├── LoginScreen.tsx
│   │   │   ├── MarketplaceScreen.tsx
│   │   │   └── ProfileScreen.tsx
│   │   │
│   │   ├── services/
│   │   │   └── auth.service.ts
│   │   │
│   │   ├── styles/
│   │   │   ├── common.ts
│   │   │   └── navigation.ts
│   │   │
│   │   ├── types/
│   │   │   ├── auth.types.ts
│   │   │   └── navigation.ts
│   │   │
│   │   ├── utils/
│   │   │   └── zenCoins.ts
│   │   │
│   │   ├── App.css
│   │   ├── App.native.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   │
│   ├── .env
│   ├── components.json
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
│
└── server/                    # NestJS backend
    ├── src/
    │   ├── modules/
    │   │   ├── auth/
    │   │   │   ├── auth.controller.ts
    │   │   │   ├── auth.module.ts
    │   │   │   ├── auth.service.ts
    │   │   │   ├── jwt.strategy.ts
    │   │   │   ├── local-auth.guard.ts
    │   │   │   └── local.strategy.ts
    │   │   │
    │   │   └── users/
    │   │       ├── user.entity.ts
    │   │       ├── users.module.ts
    │   │       └── users.service.ts
    │   │
    │   ├── app.module.ts
    │   └── main.ts
    │
    ├── .env
    ├── nest-cli.json
    ├── package.json
    └── tsconfig.json
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