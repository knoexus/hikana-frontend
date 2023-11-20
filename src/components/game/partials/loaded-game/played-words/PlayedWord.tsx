'use client';

import Modal from '@/components/common/Modal';
import WordBreakdown from './WordBreakdown';
import { Guess } from '@/state/redux/features/gameSlice';
import { Word } from '@/types/Word';
import { useCallback, useEffect, useRef, useState } from 'react';

const PlayedWord = ({ word, guess }: { word: Word; guess: Guess }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const enableModalVisibility = useCallback(
    (): void => setIsModalVisible(true),
    [setIsModalVisible],
  );

  const disableModalVisibility = useCallback(
    (): void => setIsModalVisible(false),
    [setIsModalVisible],
  );

  // When a new PlayWord is added, don't let it stay unfocused.
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView();
    }
  });

  return (
    <>
      <Modal
        isVisible={isModalVisible}
        title="Word Breakdown"
        onClose={disableModalVisibility}
      >
        <WordBreakdown word={word} />
      </Modal>
      <div
        ref={ref}
        onClick={enableModalVisibility}
        className={`${
          guess.wasCorrect ? 'bg-green-500' : 'bg-red-500'
        } border rounded-xl p-2 mx-1 cursor-pointer min-w-[120px] animate-gelatine-finite break-words`}
      >
        <div>{word.kana}</div>
        <div>
          {word.romaji}
          {!guess.wasCorrect && ` <- ${guess.input || '😶'}`}
        </div>
      </div>
    </>
  );
};

export default PlayedWord;
