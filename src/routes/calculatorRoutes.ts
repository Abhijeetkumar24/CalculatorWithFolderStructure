

import { Router } from 'express';
import { calculate } from '../controllers/calculatorController';
import { inputTypeValidationMiddleware } from '../middlewares/inputTypeValidationMiddleware';

const router = Router();

router.post('/calculate', inputTypeValidationMiddleware, calculate);

export default router;
