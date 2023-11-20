import { restartGame } from '@/state/redux/features/gameSlice';
import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import { MouseEvent, useCallback } from 'react';
import OutlineButton from '../common/OutlineButton';

const StartNewGameButton = () => {
  const dispatch = useAppDispatch();

  const handleOnClick = useCallback(
    (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void => {
      e.preventDefault();
      dispatch(restartGame());
    },
    [dispatch],
  );

  return (
    <OutlineButton
      onClick={handleOnClick}
      text="Start New Game"
      type="success"
    />
  );
};

export default StartNewGameButton;
