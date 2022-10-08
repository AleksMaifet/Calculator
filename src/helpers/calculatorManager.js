class CalculatorManager {
  static singleton;

  constructor() {
    if (CalculatorManager.singleton) {
      return CalculatorManager.singleton;
    }
    CalculatorManager.singleton = this;

    this.history = [];
    this.count = 0;
    this.result = 0;
  }
}

export const calculatorManager = new CalculatorManager();
