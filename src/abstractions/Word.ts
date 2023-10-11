export type KanaType = 'hiragana' | 'katakana';

export const isKanaType = (kanaType: string): kanaType is KanaType => {
  return kanaType === 'hiragana' || kanaType === 'katakana';
};

export interface Word {
  _id: string;
  kana: string;
  kanji: string | null;
  kana_type: KanaType;
  pitch_chars: string[] | null;
  occurence_level: number;
  jlpt_level: number;
  romaji: string;
  translations_eng: string[];
}
