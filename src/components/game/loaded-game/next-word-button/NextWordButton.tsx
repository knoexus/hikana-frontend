import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import { proceedToNextWord } from '@/state/redux/features/gameSlice';
import { MouseEvent } from 'react';

const NextWordButton = () => {
  const isCurrentWordInputCorrect = useAppSelector(
    (state) => state.gameReducer.isCurrentWordInputCorrect,
  );
  const dispatch = useAppDispatch();
  const handleOnClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    dispatch(proceedToNextWord());
  };

  return (
    <button
      onClick={(e) => handleOnClick(e)}
      disabled={!isCurrentWordInputCorrect}
    >
      Next Word {`${'-->'}`}
    </button>
  );
};

export default NextWordButton;
