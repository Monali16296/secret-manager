# Secret Manager Backend

This is the backend API for the One-Time Secret Link Generator.

## Tech Stack
- Node.js + TypeScript
- Express
- SQLite

## Running Locally

1. Install dependencies:
   ```sh
   npm install
   ```
2. Run in development mode:
   ```sh
   npm run dev
   ```
3. Build and start production server:
   ```sh
   npm run build
   npm start
   ```

## Running with Docker

```sh
docker build -t secret-manager-backend .
docker run -p 4000:4000 secret-manager-backend
```