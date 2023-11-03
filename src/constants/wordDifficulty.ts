export const wordDifficultyToMinMaxKanaSymbols: {
  [key: string]: { minKanaSymbols?: number; maxKanaSymbols?: number };
} = {
  low: { maxKanaSymbols: 4 },
  medium: { minKanaSymbols: 3, maxKanaSymbols: 7 },
  high: { minKanaSymbols: 6 },
};
