import TableSectionToggler from './partials/TableSectionToggler';
import TableSection from './partials/table-section/TableSection';
import RoundedContainer from '../common/RoundedContainer';
import Title from '../common/Title';
import { KanaTableProps } from './types/KanaTableProps';
import { TableSectionProvider } from './context/TableSectionContext';

const KanaTable = ({
  kanaTableCharactersArray,
  kanaTableSectionNames,
}: KanaTableProps) => {
  return (
    <RoundedContainer extraClasses="mt-8 bg-gradient-to-r from-gray-100 to-blue-100 bg-opacity-75">
      <Title>Characters</Title>
      <TableSectionProvider initialValue="Base">
        <TableSectionToggler kanaTableSectionNames={kanaTableSectionNames} />
        <TableSection kanaTableCharactersArray={kanaTableCharactersArray} />
      </TableSectionProvider>
    </RoundedContainer>
  );
};

export default KanaTable;
