import { KanaTableCharacter } from '@/abstractions/KanaCharacter';

const TableCell = ({
  character,
}: {
  character: KanaTableCharacter | undefined;
}) => {
  return (
    <td className="p-1 max-w-min">
      {character && (
        <div className="flex flex-col p-2 bg-white bg-opacity-50 border rounded-xl">
          <div className="flex-1 text-center line-height-20">
            {character.kana}
          </div>
          <div className="flex-1 text-center line-height-20 bg-teal-100">
            {character.romaji}
          </div>
        </div>
      )}
    </td>
  );
};

export default TableCell;
