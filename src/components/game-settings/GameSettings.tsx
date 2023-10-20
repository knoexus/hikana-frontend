'use client';

import { useState } from 'react';
import BooleanToggleField from './partials/BooleanToggleField';
import NumericSliderField from './partials/NumericSliderField';
import './GameSettings.css';
import { KanaType } from '@/abstractions/Word';
import { upperCaseFirstLetter } from '@/utilities/string';

const GameSettings = ({ oppositeKana }: { oppositeKana: KanaType }) => {
  const [doCharacterTips, setDoCharacterTips] = useState(false);
  const [doSkips, setDoSkips] = useState(false);
  const [doFeatureResidual, setDoFeatureResidual] = useState(false);
  const [doFixedNumberOfSyllables, setDoFixedNumberOfSyllables] =
    useState(false);

  const [syllableAmount, setSyllableAmount] = useState(10);

  return (
    <div className="container mt-8 mb-4 p-4 rounded-2xl shadow-lg inset-0 bg-gradient-to-r from-gray-100 to-slate-200 bg-opacity-75">
      <h1 className="text-3xl mb-4">Game Settings</h1>

      <BooleanToggleField
        name="Character Tips"
        value={doCharacterTips}
        onChangeCallback={() => setDoCharacterTips(!doCharacterTips)}
      />
      <BooleanToggleField
        name="Skips"
        value={doSkips}
        onChangeCallback={() => setDoSkips(!doSkips)}
      />
      <BooleanToggleField
        name={`Feature ${upperCaseFirstLetter(oppositeKana)}`}
        value={doFeatureResidual}
        onChangeCallback={() => setDoFeatureResidual(!doFeatureResidual)}
      />
      <BooleanToggleField
        name="Fixed Number of Syllables"
        value={doFixedNumberOfSyllables}
        onChangeCallback={() =>
          setDoFixedNumberOfSyllables(!doFixedNumberOfSyllables)
        }
      />
      {doFixedNumberOfSyllables && (
        <NumericSliderField
          name="Syllables"
          value={syllableAmount}
          minValue={1}
          maxValue={10}
          onChangeCallback={(e: number) => setSyllableAmount(e)}
        />
      )}
    </div>
  );
};

export default GameSettings;
