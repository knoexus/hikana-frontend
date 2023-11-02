export const upperCaseFirstLetter = (str: string): string =>
  str[0].toUpperCase() + str.slice(1);

export const stripOfFirstSymbol = (str: string): string => str.slice(1);

/**
 * Get the index of the last character of a beginning substring that matches between two strings.
 * Example: string1 - furigana, string2 - furansu. Output - 2, since (fur) and (fur) match, (r) symbol is at index 2.
 * @param string1
 * @param string2
 * @returns index
 */
export const findLastCharIndexOfMatchingSubstrings = (
  string1: string,
  string2: string,
): number => {
  let index = -1;
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] === string2[i]) {
      index++;
    } else return index;
  }
  return index;
};
