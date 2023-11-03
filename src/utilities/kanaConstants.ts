import {
  KanaTableCharactersMapping,
  KanaTableCharacter,
  KanaCharactersMapping,
  KanaCharacterTipsMapping,
} from '@/types/KanaCharacter';

// Strip of 'tips' field.
export const createKanaTableCharactersObject = (
  kanaCharactersMapping: KanaCharactersMapping,
): KanaTableCharactersMapping =>
  Object.entries(kanaCharactersMapping).reduce(
    (acc, [kana, { romaji, tableProps }]) => ({
      ...acc,
      [kana]: {
        romaji,
        tableProps,
      },
    }),
    {},
  );

// Convert table characters object to array.
export const createKanaTableCharactersArray = (
  kanaTableCharactersObject: KanaTableCharactersMapping,
): KanaTableCharacter[] =>
  Object.entries(kanaTableCharactersObject).map(([kana, rest]) => ({
    kana,
    ...rest,
  }));

export const createKanaCharacterTipsObject = (
  kanaCharactersMapping: KanaCharactersMapping,
): KanaCharacterTipsMapping =>
  Object.entries(kanaCharactersMapping).reduce(
    (acc, [kana, rest]) => ({
      ...acc,
      [kana]: rest?.tips,
    }),
    {},
  );
