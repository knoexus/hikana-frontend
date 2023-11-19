import { ChangeEvent, KeyboardEvent } from 'react';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import {
  setCurrentWordInput,
  proceedToNextWord,
  finishGame,
} from '@/state/redux/features/gameSlice';
import { useWords } from '@/components/game/context/WordsContext';

const RomajiInput = () => {
  const dispatch = useAppDispatch();
  const totalWordsCount = useWords().length;
  const { currentWordInput, currentWordIndex } = useAppSelector(
    (state) => state.gameReducer,
  );

  const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setCurrentWordInput(value));
  };

  const handleInputOnKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (currentWordIndex !== totalWordsCount - 1) {
        dispatch(proceedToNextWord());
      } else {
        dispatch(finishGame());
      }
    }
  };

  return (
    <input
      onChange={handleInputOnChange}
      onKeyUp={handleInputOnKeyUp}
      className="border-b focus:border-b-slate-400 py-1 mt-2 outline-none"
      type="text"
      value={currentWordInput}
    ></input>
  );
};

export default RomajiInput;
