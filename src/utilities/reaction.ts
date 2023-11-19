export const getEmojiReaction = (score: number): string => {
  if (score < 0 || score > 100) {
    throw new Error('Input score must be between 0 and 100');
  }

  if (score >= 80) {
    return '😍'; // Excellent
  } else if (score >= 60) {
    return '😊'; // Good
  } else if (score >= 40) {
    return '😐'; // Average
  } else {
    return '😕'; // Below Average
  }
};
