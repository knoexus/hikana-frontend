import hikanaApi from '@/state/redux/apis/hikanaApi';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import { useKanaTypeFromPath } from '@/utilities/hooks/useKanaTypeFromPath';
import { getKanaCharacterStringsBySectionColumnSelection } from '@/utilities/kanaTableCharacters';
import { wordDifficultyToMinMaxKanaCharacters } from '@/constants/wordDifficulty';
import { useMemo } from 'react';
import LoadedGame from './partials/loaded-game/LoadedGame';
import Loading from './partials/loading/Loading';
import { WordsProvider } from './context/WordsContext';

const Game = () => {
  const kanaType = useKanaTypeFromPath();
  const kanaTableSelection = useAppSelector(
    (state) => state.kanaTableSelectedColumnsReducer.katakana,
  );
  const { doCustomLevel, level } = useAppSelector(
    (state) => state.gameSettingsReducer.wordDifficulty,
  );

  const kanaCharacterStrings = useMemo(
    () =>
      getKanaCharacterStringsBySectionColumnSelection(
        kanaType,
        kanaTableSelection,
      ),
    [kanaType, kanaTableSelection],
  );

  const { isLoading, isError, data } = hikanaApi.useGetAllWordsQuery({
    kanaType,
    ...(kanaCharacterStrings && {
      kanaSyllables: kanaCharacterStrings.join(','),
    }),
    ...(doCustomLevel && {
      ...wordDifficultyToMinMaxKanaCharacters[level],
    }),
    limit: 100,
  });

  if (isLoading) return <Loading />;
  if (isError) return <div>Error...</div>;
  if (data)
    return (
      <WordsProvider initialValue={data}>
        <LoadedGame />
      </WordsProvider>
    );
};

export default Game;
