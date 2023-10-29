export const wordDifficultyToMinMaxKanaCharacters: {
  [key: string]: { minKanaCharacters?: number; maxKanaCharacters?: number };
} = {
  low: { maxKanaCharacters: 4 },
  medium: { minKanaCharacters: 3, maxKanaCharacters: 7 },
  high: { minKanaCharacters: 6 },
};
