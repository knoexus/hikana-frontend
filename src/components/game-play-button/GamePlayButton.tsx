'use client';

import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import { setGameIsOn } from '@/state/redux/features/gameSlice';
import { MouseEvent } from 'react';
import OutlineButton from '../common/OutlineButton';
import Container from '../common/Container';

const GamePlayButton = () => {
  const dispatch = useAppDispatch();
  const handleOnClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    dispatch(setGameIsOn(true));
  };
  return (
    <Container extraClasses="mt-8 mb-4">
      <OutlineButton
        text="Play"
        type="success"
        onClick={(e) => handleOnClick(e)}
        extraClasses="mt-5 mb-5 w-full"
      />
    </Container>
  );
};

export default GamePlayButton;
