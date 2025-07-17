import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import secretsRouter from './routes/secrets';
import errorMiddleware from './utils/errorMiddleware';
import logger from './config/logger';
import rateLimit from 'express-rate-limit';
import { sequelize } from './config/db';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the RateLimit-* headers
  legacyHeaders: false, // Disable the X-RateLimit-* headers
});

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(express.json());

app.use(limiter);

// Winston request logger middleware
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.use('/api/secrets', secretsRouter);
app.use(errorMiddleware);

const PORT = process.env.PORT || 4000;

sequelize.sync()
  .then(() => {
    logger.info('Database synced');
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    logger.error('Database sync failed:', err);
    process.exit(1);
  });

export default app; 