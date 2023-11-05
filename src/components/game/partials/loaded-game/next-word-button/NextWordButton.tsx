import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import { proceedToNextWord } from '@/state/redux/features/gameSlice';
import { MouseEvent } from 'react';
import OutlineButton from '@/components/common/OutlineButton';

const NextWordButton = () => {
  const dispatch = useAppDispatch();
  const handleOnClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    dispatch(proceedToNextWord());
  };

  return (
    <OutlineButton
      text="Next Word ->"
      bgColor="white"
      outlineColor="gray-500"
      onClick={(e) => handleOnClick(e)}
      extraClasses="mt-9"
    />
  );
};

export default NextWordButton;
