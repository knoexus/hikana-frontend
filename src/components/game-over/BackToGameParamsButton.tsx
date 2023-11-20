import { resetGameState } from '@/state/redux/features/gameSlice';
import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import { MouseEvent, useCallback } from 'react';
import OutlineButton from '../common/OutlineButton';

const BackToGameParamsButton = () => {
  const dispatch = useAppDispatch();

  const handleOnClick = useCallback(
    (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void => {
      e.preventDefault();
      dispatch(resetGameState());
    },
    [dispatch],
  );

  return (
    <OutlineButton
      onClick={handleOnClick}
      text="Back to Game Parameters"
      type="danger"
    />
  );
};

export default BackToGameParamsButton;
