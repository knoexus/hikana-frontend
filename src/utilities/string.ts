export const upperCaseFirstLetter = (str: string): string =>
  str[0].toUpperCase() + str.slice(1);

export const stripOfFirstSymbol = (str: string): string => str.slice(1);
