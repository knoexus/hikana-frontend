import hikanaApi from '@/state/redux/apis/hikanaApi';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import { useKanaTypeFromPath } from '@/utilities/hooks/useKanaTypeFromPath';
import { getKanaCharacterStringsBySectionColumnSelection } from '@/utilities/kanaTableCharacters';
import { wordDifficultyToMinMaxKanaSymbols } from '@/constants/wordDifficulty';
import { useMemo } from 'react';
import LoadedGame from './partials/loaded-game/LoadedGame';
import Loading from './partials/loading/Loading';
import { WordsProvider } from './context/WordsContext';
import { useEffect } from 'react';
import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import { resetGameState } from '@/state/redux/features/gameSlice';

const Game = () => {
  const dispatch = useAppDispatch();
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
      kanaCharacters: kanaCharacterStrings.join(','),
    }),
    ...(doCustomLevel && {
      ...wordDifficultyToMinMaxKanaSymbols[level],
    }),
    limit: 100,
  });

  useEffect(
    () => () => {
      dispatch(resetGameState());
    },
    [dispatch],
  );

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
