const ReversePolish = expression => {
  if (typeof expression !== 'string') return null;
  expression = expression.split('');
  const queue = [];
  const stack = [];
  const precedence = {
    '(': 10,
    '+': 20,
    '-': 20,
    '/': 30,
    '*': 30,
    '%': 30,
  };

  while (expression.length) {
    const token = expression.shift();

    const isOperator = isNaN(token);

    const tkPrec = precedence[token] || 0;

    let stPrec = stack.length ? precedence[stack.at(-1)] : 0;

    switch (true) {
      case isOperator && token === ')': {
        let op = null;
        while ((op = stack.pop()) !== '(') {
          queue.push(op);
        }
        break;
      }

      case !isOperator:
        queue.push(token);
        break;

      case isOperator && (!stack.length || token === '(' || tkPrec > stPrec):
        stack.push(token);
        break;

      default:
        while (tkPrec <= stPrec) {
          queue.push(stack.pop());
          stPrec = stack.length ? precedence[stack.at(-1)] : 0;
        }

        stack.push(token);
    }
  }

  while (stack.length) {
    queue.push(stack.pop());
  }

  console.log(queue);
};

export default ReversePolish;
