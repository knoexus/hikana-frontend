import hikanaApi from '@/redux/apis/hikanaApi';
import useAppSelector from '@/hooks/redux/useAppSelector';
import { getKanaCharacterStringsBySectionColumnSelection } from '@/utilities/kanaTableCharacters';
import { hiraganaTableCharactersArray } from '@/constants/characters/hiraganaCharacters';
import { katakanaTableCharactersArray } from '@/constants/characters/katakanaCharacters';
import { useMemo } from 'react';

const Game = () => {
  const kanaTableSelection = useAppSelector(
    (state) => state.kanaTableSelectedColumnsReducer.katakana,
  );
  const kanaCharacterStrings = useMemo(
    () =>
      getKanaCharacterStringsBySectionColumnSelection(
        katakanaTableCharactersArray,
        kanaTableSelection,
      ),
    [kanaTableSelection],
  );

  console.log(kanaCharacterStrings.join(','));

  const { data } = hikanaApi.useGetAllWordsQuery({
    kanaType: 'katakana',
    ...(kanaCharacterStrings && {
      kanaSyllables: kanaCharacterStrings.join(','),
    }),
  });
  return (
    <div>
      {data?.slice(0, 10).map((word, i) => (
        <>
          <span>{word.kana}</span>
          <br></br>
        </>
      ))}
    </div>
  );
};

export default Game;
