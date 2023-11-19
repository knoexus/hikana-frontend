import StartNewGameButton from './StartNewGameButton';
import BackToGameParamsButton from './BackToGameParamsButton';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import { getEmojiReaction } from '@/utilities/reaction';
import { Rampart_One } from 'next/font/google';

const rampartOne = Rampart_One({
  weight: '400',
  subsets: ['latin'],
});

const GameOver = () => {
  const { correctGuessesCount, incorrectGuessesCount } = useAppSelector(
    (state) => state.gameReducer,
  );
  const totalWordsCount = correctGuessesCount + incorrectGuessesCount;
  const correctPercent = (correctGuessesCount / totalWordsCount) * 100;
  return (
    <div className="w-full h-full flex flex-col justify-center items-center [&>*:not(:first-child)]:mt-8 animate-gelatine-finite">
      <div
        style={{ fontFamily: rampartOne.style.fontFamily }}
        className="text-5xl lg:text-7xl"
      >
        ゲームオーバー
      </div>
      <div className="text-center flex flex-col">
        <span className="text-4xl">{getEmojiReaction(correctPercent)}</span>
        <span className="font-semibold">
          Score: {`${correctGuessesCount}/${totalWordsCount}`}
        </span>
      </div>
      <div className="flex flex-col [&>*:not(:first-child)]:mt-4">
        <StartNewGameButton />
        <BackToGameParamsButton />
      </div>
    </div>
  );
};

export default GameOver;
