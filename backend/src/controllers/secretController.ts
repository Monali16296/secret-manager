import { Request, Response } from 'express';
import * as secretService from '../services/secretService';
import { sendSuccess, sendError } from '../utils/responseHandler';
import { SECRET_NOT_FOUND, SECRET_REQUIRED } from '../config/constants';

/**
 * Handles creation of a new secret.
 * Expects a 'secret' in the request body and returns a link if successful.
 *
 * @param {Request} req - Express request object, expects body: { secret: string }
 * @param {Response} res - Express response object
 */
export async function createSecret(req: Request, res: Response) {
  const { secret } = req.body;
  if (!secret || typeof secret !== 'string') {
    return sendError(res, 400, SECRET_REQUIRED);
  }
  try {
    const link = await secretService.createSecret(secret);
    sendSuccess(res, { link });
  } catch (err) {
    throw err;
  }
}

/**
 * Retrieves a secret by its ID from the request params.
 * Returns the secret if found, otherwise sends a 404 error.
 *
 * @param {Request} req - Express request object, expects params: { id: string }
 * @param {Response} res - Express response object
 */
export async function getSecret(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const secret = await secretService.getSecret(id);
    if (!secret) {
      return sendError(res, 404, SECRET_NOT_FOUND);
    }
    sendSuccess(res, { secret });
  } catch (err) {
    throw err;
  }
} 