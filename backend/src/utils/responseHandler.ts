import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export function sendSuccess(res: Response, data: object, status = 200) {
  return res.status(status).json({ success: true, ...data });
}

export function sendError(res: Response, status: number, error: string) {
  return res.status(status).json({ success: false, error });
}

export function validationHandler(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
} 