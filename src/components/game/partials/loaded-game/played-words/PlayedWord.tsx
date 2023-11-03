'use client';

import Modal from '@/components/common/Modal';
import WordBreakdown from './WordBreakdown';
import { Guess } from '@/state/redux/features/gameSlice';
import { Word } from '@/types/Word';
import { useState } from 'react';

const PlayedWord = ({ word, guess }: { word: Word; guess: Guess }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <Modal
        isVisible={isModalVisible}
        title="Word Breakdown"
        onClose={() => setIsModalVisible(false)}
      >
        <WordBreakdown word={word} />
      </Modal>
      <div
        onClick={() => setIsModalVisible(true)}
        className={`${
          guess.wasCorrect ? 'bg-green-500' : 'bg-red-500'
        } border rounded-xl p-2`}
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
