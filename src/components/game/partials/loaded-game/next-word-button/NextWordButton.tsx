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
    <button
      className="bg-white text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white hover: hover:border-white border font-bold py-2 px-4 rounded-xl mt-9"
      onClick={(e) => handleOnClick(e)}
    >
      Next Word {`${'->'}`}
    </button>
  );
};

export default NextWordButton;
