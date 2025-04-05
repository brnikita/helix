# Helix

Automatic brand assets generation

## Description

Helix is a web application designed for generating brand assets and managing brand identity. It features:

- Brand asset generation screens
- Asset selection and customization
- Brand identity management

## Installation

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Docker and Docker Compose (for containerized setup)

### Option 1: Local Development

1. Clone the repository:
```
git clone https://github.com/yourusername/helix.git
cd helix
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Option 2: Docker Setup

1. Clone the repository:
```
git clone https://github.com/yourusername/helix.git
cd helix
```

2. Start the development environment with Docker Compose:
```
docker-compose up dev
```

3. For production build:
```
docker-compose up web
```

4. Access the application:
   - Development: `http://localhost:3000`
   - Production: `http://localhost:8080`

## Project Structure

- `/src` - Application source code
  - `/components` - UI components
  - `/screens` - Main application screens (Generate, AssetSelection)
  - `/lib` - Utility functions and helpers

## Technologies

- React
- TypeScript
- Tailwind CSS
- Vite
- Docker
