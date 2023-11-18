import TableSectionToggler from './partials/TableSectionToggler';
import TableSection from './partials/table-section/TableSection';
import RoundedContainer from '../common/RoundedContainer';
import Title from '../common/Title';
import { KanaTableProps } from './types/KanaTableProps';
import { TableSectionProvider } from './context/TableSectionContext';
import { getMaxRowAndColumn } from '@/utilities/kanaTableCharacters';
import { MaxRowColumnInitializerProvider } from './context/MaxRowColumnInitializerProvider';
import { useMemo } from 'react';

const KanaTable = ({
  kanaTableCharactersArray,
  kanaTableSectionNames,
}: KanaTableProps) => {
  const maxRowColumnInitializer = useMemo((): [null[], null[]] => {
    const [maxRow, maxColumn] = getMaxRowAndColumn(kanaTableCharactersArray);
    return [Array(maxRow + 1).fill(null), Array(maxColumn + 1).fill(null)];
  }, [kanaTableCharactersArray]);

  return (
    <RoundedContainer extraClasses="mt-8 bg-gray-100 bg-opacity-75">
      <Title>Characters</Title>
      <TableSectionProvider initialValue="Base">
        <MaxRowColumnInitializerProvider initialValue={maxRowColumnInitializer}>
          <TableSectionToggler kanaTableSectionNames={kanaTableSectionNames} />
          <TableSection kanaTableCharactersArray={kanaTableCharactersArray} />
        </MaxRowColumnInitializerProvider>
      </TableSectionProvider>
    </RoundedContainer>
  );
};

export default KanaTable;
