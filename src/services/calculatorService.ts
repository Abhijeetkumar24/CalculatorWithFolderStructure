

import { Calculation } from '../models/calculation';

export function performCalculation(calculation: Calculation): number {
  const { num1, num2, operator } = calculation;
  
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      throw new Error('Invalid operator');
  }
}
