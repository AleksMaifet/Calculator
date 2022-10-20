export const synchronization = (state, manager) => {
  const {
    app: { expression, prevNumber, historyList },
  } = state;
  manager.expression = expression;
  manager.prevValue = prevNumber;
  manager.history = historyList;
};
