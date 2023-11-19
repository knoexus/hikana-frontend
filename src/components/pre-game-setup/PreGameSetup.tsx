'use client';

import GameManager from '../game-manager/GameManager';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import GameParameters from '../game-parameters/GameParameters';

const PreGameSetup = () => {
  const { isOn: isGameOn } = useAppSelector((state) => state.gameReducer);
  return !isGameOn ? <GameParameters /> : <GameManager />;
};

export default PreGameSetup;
