'use client';

import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import { setGameIsOn } from '@/state/redux/features/gameSlice';

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
