import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import { finishGame } from '@/state/redux/features/gameSlice';
import { MouseEvent } from 'react';
import OutlineButton from '@/components/common/OutlineButton';

const FinishGameButton = () => {
  const dispatch = useAppDispatch();
  const handleOnClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    dispatch(finishGame());
  };

  return (
    <OutlineButton
      text="Finish Game"
      type="success"
      onClick={(e) => handleOnClick(e)}
      extraClasses="mt-9"
    />
  );
};

export default FinishGameButton;
