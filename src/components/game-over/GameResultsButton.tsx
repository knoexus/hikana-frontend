import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import { MouseEvent, useCallback } from 'react';
import OutlineButton from '../common/OutlineButton';

const GameResultButton = () => {
  const dispatch = useAppDispatch();

  const handleOnClick = useCallback(
    (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void => {
      e.preventDefault();
    },
    [dispatch],
  );

  return (
    <OutlineButton onClick={handleOnClick} text="Game Result" type="info" />
  );
};

export default GameResultButton;
