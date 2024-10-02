export function sortSignals(signals: any) {
  const arr = [...signals];

  const sortedSignals = arr.sort((a, b) => {
    if (b.priority && a.priority) {
      return b.priority - a.priority;
    }
    return 1;
  });

  return sortedSignals;
}
