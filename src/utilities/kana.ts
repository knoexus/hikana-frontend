import { KanaType } from '@/types/Word';
import { hiraganaTableCharactersObject } from '@/constants/characters/hiraganaCharacters';
import { katakanaTableCharactersObject } from '@/constants/characters/katakanaCharacters';

interface KanaRomaji {
  kana: string;
  romaji: string;
}

const getKanaSpecialSymbolValue = (
  specialSymbol: string,
  romajiTransliterationForKanaCharacterBefore: string | undefined,
  romajiTransliterationForSymbolBefore: string | undefined,
): string => {
  if (specialSymbol === 'っ' || specialSymbol === 'ッ') {
    if (!romajiTransliterationForSymbolBefore) {
      return '';
    }
    // Exceptions
    if (romajiTransliterationForSymbolBefore === 'chi') {
      return 't';
    }
    return romajiTransliterationForSymbolBefore[0];
  }
  if (specialSymbol === 'ぅ' || specialSymbol === 'ー') {
    if (!romajiTransliterationForKanaCharacterBefore) {
      throw new Error(
        'Cannot apply vowel prolongation to an undefined character.',
      );
    }
    return romajiTransliterationForKanaCharacterBefore.slice(-1);
  }
  throw new Error('The given symbol is not special.');
};

export const mapKanaToRomaji = (
  kana: string,
  kanaType: KanaType,
): KanaRomaji[] => {
  const kanaTableCharactersObject =
    kanaType === 'hiragana'
      ? hiraganaTableCharactersObject
      : katakanaTableCharactersObject;
  const kanaSymbolArr = kana.split('');

  return kanaSymbolArr.reduce<KanaRomaji[]>(
    (kanaRomajiArr, kanaSymbol, idx) => {
      // If the previous character was compound (e.g., みゅ), skip this symbol index.
      if (kanaRomajiArr.map(({ kana }) => kana).join('').length > idx) {
        return kanaRomajiArr;
      }

      // Try getting a kana character by two symbols – max there is in a table
      const maxKanaCharacter =
        kanaSymbol + (kanaSymbolArr[idx + 1] ? kanaSymbolArr[idx + 1] : '');

      if (kanaTableCharactersObject[maxKanaCharacter]) {
        return [
          ...kanaRomajiArr,
          {
            kana: maxKanaCharacter,
            romaji: kanaTableCharactersObject[maxKanaCharacter].romaji,
          },
        ];
      }

      if (kanaTableCharactersObject[kanaSymbol]) {
        return [
          ...kanaRomajiArr,
          {
            kana: kanaSymbol,
            romaji: kanaTableCharactersObject[kanaSymbol].romaji,
          },
        ];
      }

      // Must be a special character otherwise
      const lastKanaRomajiArrElement = kanaRomajiArr[kanaRomajiArr.length - 1];
      const nextKanaSymbolArrElement = kanaSymbolArr[idx + 1];
      const specialCharacterRomaji = getKanaSpecialSymbolValue(
        kanaSymbol,
        lastKanaRomajiArrElement && lastKanaRomajiArrElement.romaji,
        nextKanaSymbolArrElement &&
          kanaTableCharactersObject[nextKanaSymbolArrElement] &&
          kanaTableCharactersObject[nextKanaSymbolArrElement].romaji,
      );
      return [
        ...kanaRomajiArr,
        {
          kana: kanaSymbol,
          romaji: specialCharacterRomaji,
        },
      ];
    },
    [],
  );
};

export const getMatchingKanaSubstring = (
  romajiPart: string,
  kanaRomajiArr: KanaRomaji[],
): {
  matchingKanaString: string;
  matchingRomajiString: string;
} => {
  let matchingKanaString = '';
  let matchingRomajiString = '';

  for (const {
    kana: kanaCharacter,
    romaji: romajiTransliteration,
  } of kanaRomajiArr) {
    if (romajiPart.startsWith(matchingRomajiString + romajiTransliteration)) {
      matchingKanaString += kanaCharacter;
      matchingRomajiString += romajiTransliteration;
    } else {
      break;
    }
  }

  return { matchingKanaString, matchingRomajiString };
};
