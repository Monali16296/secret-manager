import { body } from 'express-validator';
import { SECRET_REQUIRED, SECRET_MUST_BE_STRING, SECRET_LENGTH } from '../config/constants';

export const createSecretValidation = [
  body('secret')
    .exists({ checkFalsy: true }).withMessage(SECRET_REQUIRED)
    .isString().withMessage(SECRET_MUST_BE_STRING)
    .isLength({ min: 1, max: 1000 }).withMessage(SECRET_LENGTH),
]; 