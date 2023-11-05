'use client';

import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import { setGameIsOn } from '@/state/redux/features/gameSlice';
import { MouseEvent } from 'react';
import OutlineButton from '../common/OutlineButton';

const GamePlayButton = () => {
  const dispatch = useAppDispatch();
  const handleOnClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    dispatch(setGameIsOn(true));
  };
  return (
    <OutlineButton
      text="Play"
      bgColor="white"
      outlineColor="green-500"
      onClick={(e) => handleOnClick(e)}
    />
  );
};

export default GamePlayButton;
