import { ChangeEvent, KeyboardEvent } from 'react';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import {
  setCurrentWordInput,
  proceedToNextWord,
} from '@/state/redux/features/gameSlice';

const RomajiInput = () => {
  const dispatch = useAppDispatch();
  const { currentWordInput } = useAppSelector((state) => state.gameReducer);

  const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setCurrentWordInput(value));
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
