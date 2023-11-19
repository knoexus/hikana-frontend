'use client';

import { useEffect } from 'react';
import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import { resetGameState } from '@/state/redux/features/gameSlice';
import Game from '../game/Game';
import GameOver from '../game-over/GameOver';

const GameManager = () => {
  const dispatch = useAppDispatch();
  const { isOver: isGameOver } = useAppSelector((state) => state.gameReducer);

  useEffect(
    () => () => {
      dispatch(resetGameState());
    },
    [dispatch],
  );

  return !isGameOver ? <Game /> : <GameOver />;
};

export default GameManager;
