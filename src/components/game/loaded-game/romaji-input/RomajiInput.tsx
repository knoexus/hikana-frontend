import { Word } from '@/types/Word';
import { ChangeEvent } from 'react';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import {
  setIsCurrentWordInputCorrect,
  setCurrentWordInput,
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
  return (
    <input
      onChange={handleInputOnChange}
      className="outline outline-1"
      type="text"
      value={currentWordInput}
    ></input>
  );
};

export default RomajiInput;
