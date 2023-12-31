

import { Request, Response, NextFunction } from 'express';

export function inputTypeValidationMiddleware(req: Request, res: Response, next: NextFunction): void {
  const { num1, num2 } = req.body;
  
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    res.status(400).json({error:'Invalid input types'});
  }
  else{
  
  next();
  }
}
