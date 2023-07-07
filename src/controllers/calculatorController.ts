

import { Request, Response } from 'express';
import { Calculation } from '../models/calculation';
import { performCalculation } from '../services/calculatorService';

export function calculate(req: Request, res: Response): void {
  const { num1, num2, operator } = req.body as Calculation;
  
  try {
    
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        res.status(400).json({error:'Invalid input types'});
    }
    
    const result = performCalculation({ num1, num2, operator });
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ error: "user error" });
  }
}

