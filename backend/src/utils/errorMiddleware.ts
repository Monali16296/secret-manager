import { Request, Response, NextFunction } from 'express';
import { INTERNAL_SERVER_ERROR } from '../config/constants';

const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || INTERNAL_SERVER_ERROR;
  res.status(status).json({ success: false, error: message });
};

export default errorMiddleware; 