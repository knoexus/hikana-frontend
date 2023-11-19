import { restartGame } from '@/state/redux/features/gameSlice';
import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import { MouseEvent } from 'react';
import OutlineButton from '../common/OutlineButton';

const StartNewGameButton = () => {
  const dispatch = useAppDispatch();
  const handleOnClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    dispatch(restartGame());
  };
  return (
    <OutlineButton
      onClick={handleOnClick}
      text="Start New Game"
      type="success"
    />
  );
};

export default StartNewGameButton;
