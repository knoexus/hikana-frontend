import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import { proceedToNextWord } from '@/state/redux/features/gameSlice';
import { MouseEvent, useCallback } from 'react';
import OutlineButton from '@/components/common/OutlineButton';

const NextWordButton = () => {
  const dispatch = useAppDispatch();

  const handleOnClick = useCallback(
    (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void => {
      e.preventDefault();
      dispatch(proceedToNextWord());
    },
    [dispatch],
  );

  return (
    <OutlineButton
      text="Next Word ->"
      type="info"
      onClick={(e) => handleOnClick(e)}
      extraClasses="mt-9"
    />
  );
};

export default NextWordButton;
