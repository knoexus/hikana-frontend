import { resetGameState } from '@/state/redux/features/gameSlice';
import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import { MouseEvent } from 'react';
import OutlineButton from '../common/OutlineButton';

const BackToGameParamsButton = () => {
  const dispatch = useAppDispatch();
  const handleOnClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    dispatch(resetGameState());
  };

  return (
    <OutlineButton
      onClick={handleOnClick}
      text="Back to Game Parameters"
      type="danger"
    />
  );
};

export default BackToGameParamsButton;
