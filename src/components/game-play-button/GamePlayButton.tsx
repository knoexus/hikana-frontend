'use client';

import useAppDispatch from '@/hooks/redux/useAppDispatch';
import { setGameIsOn } from '@/redux/features/gameSlice';

const GamePlayButton = () => {
  const dispatch = useAppDispatch();
  const handleOnClick = () => {
    dispatch(setGameIsOn(true));
  };
  return (
    <button
      className="bg-white text-green-500 border-green-500 hover:bg-green-500 hover:text-white hover: hover:border-white border font-bold py-2 px-4 rounded-xl"
      onClick={handleOnClick}
    >
      Play
    </button>
  );
};

export default GamePlayButton;
