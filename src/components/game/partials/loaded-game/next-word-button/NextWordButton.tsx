import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import { proceedToNextWord } from '@/state/redux/features/gameSlice';
import { MouseEvent } from 'react';

const NextWordButton = () => {
  const dispatch = useAppDispatch();
  const handleOnClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    dispatch(proceedToNextWord());
  };

  return (
    <button onClick={(e) => handleOnClick(e)}>Next Word {`${'-->'}`}</button>
  );
};

export default NextWordButton;
