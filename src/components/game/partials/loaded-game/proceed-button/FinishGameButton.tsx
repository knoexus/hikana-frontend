import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import { finishGame } from '@/state/redux/features/gameSlice';
import { MouseEvent, useCallback } from 'react';
import OutlineButton from '@/components/common/OutlineButton';

const FinishGameButton = () => {
  const dispatch = useAppDispatch();

  const handleOnClick = useCallback(
    (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void => {
      e.preventDefault();
      dispatch(finishGame());
    },
    [dispatch],
  );

  return (
    <OutlineButton
      text="Finish Game"
      type="success"
      onClick={handleOnClick}
      extraClasses="mt-9"
    />
  );
};

export default FinishGameButton;
