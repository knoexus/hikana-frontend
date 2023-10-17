'use client';

import { TableSectionProps } from '@/components/kana-table/abstractions/KanaTableProps';
import { useMemo } from 'react';
import { useTableSection } from '../context/TableSectionContext';

const TableSection = ({ kanaCharacters }: TableSectionProps) => {
  const tableSection = useTableSection();

  const tableSectionCharacters = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(kanaCharacters).filter(
          ([
            _,
            {
              tableProps: { section },
            },
          ]) => section === tableSection,
        ),
      ),
    [tableSection, kanaCharacters],
  );

  const [maxRowArray, maxColumnArray] = useMemo((): [null[], null[]] => {
    const getMaxRowAndColumn = (): [number, number] => {
      let maxRow = 0;
      let maxColumn = 0;

      Object.values(tableSectionCharacters).forEach(
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

  const getCharacterPropsByTableProps = (
    tableRow: number,
    tableColumn: number,
  ): { character: string; romaji: string } | null => {
    const value = Object.entries(tableSectionCharacters).find(
      ([
        _,
        {
          tableProps: {
            position: { row, column },
          },
        },
      ]) => row === tableRow && column === tableColumn,
    );
    if (value === undefined) {
      return null;
    }
    return { character: value[0], romaji: value[1].romaji };
  };

  return (
    <table className="w-full table-fixed">
      <tbody>
        {maxRowArray.map((_, mrIdx) => (
          <tr key={mrIdx}>
            {maxColumnArray.map((_, mcIdx) =>
              (() => {
                const characterProps = getCharacterPropsByTableProps(
                  mrIdx,
                  mcIdx,
                );
                return (
                  <td key={mcIdx} className="p-1 max-w-min">
                    {characterProps && (
                      <div className="flex flex-col p-2 bg-white bg-opacity-50 border rounded-xl">
                        <div className="flex-1 text-center line-height-20">
                          {characterProps.character}
                        </div>
                        <div className="flex-1 text-center line-height-20 bg-teal-100">
                          {characterProps.romaji}
                        </div>
                      </div>
                    )}
                  </td>
                );
              })(),
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableSection;
