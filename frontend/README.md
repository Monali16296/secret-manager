# Secret Manager Frontend

This is the frontend for the One-Time Secret Link Generator.

## Tech Stack
- React.js + TypeScript

## Running Locally

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm start
   ```
3. Open [http://localhost:3000](http://localhost:3000)

## Running with Docker

```sh
docker build -t secret-manager-frontend .
docker run -p 3000:3000 secret-manager-frontend
```

Or use `docker-compose up` from the project root.

## Features
- Submit a secret and get a one-time link
- View a secret (self-destructs after viewing) 