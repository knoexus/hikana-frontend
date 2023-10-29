import hikanaApi from '@/state/redux/apis/hikanaApi';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import { useKanaTypeFromPath } from '@/utilities/hooks/useKanaTypeFromPath';
import { getKanaCharacterStringsBySectionColumnSelection } from '@/utilities/kanaTableCharacters';
import { useMemo } from 'react';
import LoadedGame from './loaded-game/LoadedGame';
import Loading from './loading/Loading';

const Game = () => {
  const kanaType = useKanaTypeFromPath();
  const kanaTableSelection = useAppSelector(
    (state) => state.kanaTableSelectedColumnsReducer.katakana,
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
  });

  if (isLoading) return <Loading />;
  if (isError) return <div>Error...</div>;
  if (data) return <LoadedGame words={data} />;
};

export default Game;
