import TableSectionToggler from './partials/TableSectionToggler';
import TableSection from './partials/table-section/TableSection';
import TableName from './partials/TableName';
import { KanaTableProps } from './types/KanaTableProps';
import { TableSectionProvider } from './context/TableSectionContext';

const KanaTable = ({
  kanaTableCharactersArray,
  kanaTableSectionNames,
}: KanaTableProps) => {
  return (
    <div className="container mt-5 p-4 border rounded-2xl shadow-lg inset-0 bg-gradient-to-r from-gray-100 to-blue-100 bg-opacity-75">
      <TableName name="Characters" />
      <TableSectionProvider initialValue="Base">
        <TableSectionToggler kanaTableSectionNames={kanaTableSectionNames} />
        <TableSection kanaTableCharactersArray={kanaTableCharactersArray} />
      </TableSectionProvider>
    </div>
  );
};

export default KanaTable;
