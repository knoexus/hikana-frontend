import { Word } from '@/types/Word';
import { ChangeEvent, KeyboardEvent } from 'react';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import {
  setIsCurrentWordInputCorrect,
  setCurrentWordInput,
  proceedToNextWord,
} from '@/state/redux/features/gameSlice';

const RomajiInput = ({ words }: { words: Word[] }) => {
  const dispatch = useAppDispatch();
  const { currentWordIndex, currentWordInput } = useAppSelector(
    (state) => state.gameReducer,
  );
  const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setCurrentWordInput(value));
    if (value === words[currentWordIndex].romaji) {
      dispatch(setIsCurrentWordInputCorrect(true));
    } else {
      dispatch(setIsCurrentWordInputCorrect(false));
    }
  };

  const handleInputOnKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(proceedToNextWord());
    }
  };

  return (
    <input
      onChange={handleInputOnChange}
      onKeyUp={handleInputOnKeyUp}
      className="outline outline-1"
      type="text"
      value={currentWordInput}
    ></input>
  );
};

export default RomajiInput;
