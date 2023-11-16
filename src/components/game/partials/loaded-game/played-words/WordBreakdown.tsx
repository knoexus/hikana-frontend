import { Word } from '@/types/Word';
import JLPTLevel from './JLPTLevel';

const WordBreakdown = ({ word }: { word: Word }) => (
  <div className="flex flex-row">
    <div className="flex flex-col w-3/4">
      <h2 className="text-2xl">{word.kana}</h2>
      <div className="font-extralight text-base flex flex-col mt-3">
        {word.kanji && <span>📕 - {word.kanji}</span>}
        <span>🔄 - {word.romaji}</span>
      </div>
      <div className="mt-3 flex flex-col">
        <span className="text-lg">Translations:</span>
        <ul className="list-disc font-extralight text-base">
          {word.translations_eng.map((translation, idx) => (
            <li className="ml-5" key={idx}>
              {translation}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="flex flex-col [&>*:not(:first-child)]:mt-2">
      {word.jlpt_level && <JLPTLevel value={word.jlpt_level} />}
      <span>Occurrence: {word.occurence_level}</span>
      {word.pitch_chars && (
        <span>Pitch Chars: {word.pitch_chars.join(', ')}</span>
      )}
    </div>
  </div>
);

export default WordBreakdown;
