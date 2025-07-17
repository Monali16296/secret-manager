import { Router } from 'express';
import * as secretController from '../controllers/secretController';
import { createSecretValidation } from '../validations/secretValidation';
import { validationHandler } from '../utils/responseHandler';

const router = Router();

router.post(
  '/',
  createSecretValidation,
  validationHandler,
  secretController.createSecret
);

router.get('/:id', secretController.getSecret);

export default router; 