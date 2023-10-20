'use client';

import { TableSectionProps } from '@/components/kana-table/abstractions/KanaTableProps';
import { useMemo } from 'react';
import { useTableSection } from '../../context/TableSectionContext';
import TableSectionColumnSelector from './TableSectionColumnSelector';
import TableSectionCharacters from './TableSectionCharacters';

const TableSection = ({ kanaTableCharactersArray }: TableSectionProps) => {
  const tableSection = useTableSection();

  const tableSectionCharacters = useMemo(
    () =>
      kanaTableCharactersArray.filter(
        ({ tableProps: { section } }) => section === tableSection,
      ),
    [tableSection, kanaTableCharactersArray],
  );

  const [maxRowArray, maxColumnArray] = useMemo((): [null[], null[]] => {
    const getMaxRowAndColumn = (): [number, number] => {
      let maxRow = 0;
      let maxColumn = 0;

      tableSectionCharacters.forEach(
        ({
          tableProps: {
            position: { row, column },
          },
        }) => {
          if (row > maxRow) {
            maxRow = row;
          }
          if (column > maxColumn) {
            maxColumn = column;
          }
        },
      );
      return [maxRow, maxColumn];
    };

    const [maxRow, maxColumn] = getMaxRowAndColumn();

    return [Array(maxRow + 1).fill(null), Array(maxColumn + 1).fill(null)];
  }, [tableSectionCharacters]);

  return (
    <table className="w-full table-fixed">
      <tbody>
        <TableSectionCharacters
          characters={tableSectionCharacters}
          rowInitializer={maxRowArray}
          columnInitializer={maxColumnArray}
        />
        <TableSectionColumnSelector columnInitializer={maxColumnArray} />
      </tbody>
    </table>
  );
};

export default TableSection;
