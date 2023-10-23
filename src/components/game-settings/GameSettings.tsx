import './GameSettings.css';
import CharacterTipsToggleField from './partials/CharacterTipsToggleField';
import SkipsFieldToggleField from './partials/SkipsFieldToggleField';
import SyllablesMixedField from './partials/SyllablesMixedField';

const GameSettings = () => {
  return (
    <div className="container mt-8 mb-4 p-4 rounded-2xl shadow-lg inset-0 bg-gradient-to-r from-gray-100 to-slate-200 bg-opacity-75">
      <h1 className="text-3xl mb-4">Game Settings</h1>
      <CharacterTipsToggleField />
      <SkipsFieldToggleField />
      <SyllablesMixedField />
    </div>
  );
};

export default GameSettings;
