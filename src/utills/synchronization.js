import { calculatorManager } from '@/utills/calculatorManager';

export const synchronization = state => {
  const { expression, historyList } = state;

  calculatorManager.expression = expression;
  calculatorManager.history = historyList;
};
