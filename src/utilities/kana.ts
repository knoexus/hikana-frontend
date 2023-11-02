import { KanaType } from '@/types/Word';
import { hiraganaTableCharactersObject } from '@/constants/characters/hiraganaCharacters';
import { katakanaTableCharactersObject } from '@/constants/characters/katakanaCharacters';
import { KanaTableCharactersMapping } from '@/types/KanaCharacter';

interface KanaRomaji {
  kana: string;
  romaji: string;
}

const identifyKanaSpecialSymbolValue = (
  specialSymbol: string,
  symbolBefore: string | undefined,
  symbolAfter: string | undefined,
  kanaTableCharactersObject: KanaTableCharactersMapping,
): string => {
  if (specialSymbol === 'っ' || specialSymbol === 'ッ') {
    if (!symbolAfter) {
      return '';
    }
    // Exceptions
    if (symbolAfter === 'ち' || symbolAfter === '') {
      return 't';
    }
    return kanaTableCharactersObject[symbolAfter].romaji[0];
  }
  if (specialSymbol === 'う' || specialSymbol === 'ー') {
    if (!symbolBefore) {
      throw new Error(
        'Cannot apply vowel prolongation to an undefined symbol.',
      );
    }
    return kanaTableCharactersObject[symbolBefore].romaji.slice(-1);
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
  const kanaCharArr = kana.split('');

  return kanaCharArr.reduce<KanaRomaji[]>((kanaRomajiArr, kanaChar, idx) => {
    // If the previous character was compound (e.g., みゅ), skip this index.
    if (kanaRomajiArr.map(({ kana }) => kana).join('').length > idx) {
      return kanaRomajiArr;
    }

    // Try getting a kana syllable by two symbols – max there is in a table
    const maxKanaSyllable =
      kanaChar + (kanaCharArr[idx + 1] ? kanaCharArr[idx + 1] : '');

    if (kanaTableCharactersObject[maxKanaSyllable]) {
      return [
        ...kanaRomajiArr,
        {
          kana: maxKanaSyllable,
          romaji: kanaTableCharactersObject[maxKanaSyllable].romaji,
        },
      ];
    }

    if (kanaTableCharactersObject[kanaChar]) {
      return [
        ...kanaRomajiArr,
        { kana: kanaChar, romaji: kanaTableCharactersObject[kanaChar].romaji },
      ];
    }

    // Must be a special character otherwise
    const specialCharacterRomaji = identifyKanaSpecialSymbolValue(
      kanaChar,
      kanaRomajiArr[kanaRomajiArr.length - 1] &&
        kanaRomajiArr[kanaRomajiArr.length - 1].kana,
      kanaCharArr[idx + 1],
      kanaTableCharactersObject,
    );
    return [
      ...kanaRomajiArr,
      {
        kana: kanaChar,
        romaji: specialCharacterRomaji,
      },
    ];
  }, []);
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

  for (const { kana: kanaSyllable, romaji: romajiSyllable } of kanaRomajiArr) {
    if (romajiPart.startsWith(matchingRomajiString + romajiSyllable)) {
      matchingKanaString += kanaSyllable;
      matchingRomajiString += romajiSyllable;
    } else {
      break;
    }
  }

  return { matchingKanaString, matchingRomajiString };
};
