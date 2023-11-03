import { Word } from '@/types/Word';

const WordBreakdown = ({ word }: { word: Word }) => {
  return (
    <div className="flex flex-col">
      <h2>{word.kana}</h2>
      <span>Romaji Transliteration: {word.romaji}</span>
      {word.kanji && <span>Kanji Equivalent: {word.kanji}</span>}
      {word.jlpt_level && <span>JLPT Level: {word.jlpt_level}</span>}
      <span>Occurrence Level: {word.occurence_level}</span>
      {word.pitch_chars && (
        <span>Pitch Chars: {word.pitch_chars.join(', ')}</span>
      )}
      <span>Translations: {word.translations_eng.join(', ')}</span>
    </div>
  );
};

export default WordBreakdown;
