import TableSectionToggler from './partials/TableSectionToggler';
import TableSection from './partials/TableSection';
import TableName from './partials/TableName';
import { KanaTableProps } from './abstractions/KanaTableProps';
import { TableSectionProvider } from './context/TableSectionContext';
import { SelectedKanaCharactersProvider } from './context/SelectedKanaCharactersContext';

const KanaTable = ({
  kanaCharacters,
  kanaTableSectionNames,
}: KanaTableProps) => {
  return (
    <div className="container mt-5 p-4 border rounded-2xl shadow-lg inset-0 bg-gradient-to-r from-gray-100 to-blue-100 bg-opacity-75">
      <TableName name="Characters" />
      <TableSectionProvider>
        <SelectedKanaCharactersProvider>
          <TableSectionToggler kanaTableSectionNames={kanaTableSectionNames} />
          <TableSection kanaCharacters={kanaCharacters} />
        </SelectedKanaCharactersProvider>
      </TableSectionProvider>
    </div>
  );
};

export default KanaTable;
