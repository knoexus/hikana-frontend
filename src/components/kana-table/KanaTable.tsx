import TableSectionToggler from './partials/TableSectionToggler';
import TableSection from './partials/TableSection';
import { KanaTableProps } from './abstractions/KanaTableProps';
import { TableSectionProvider } from './context/TableSectionContext';

const KanaTable = ({
  kanaCharacters,
  kanaTableSectionNames,
}: KanaTableProps) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Characters</h1>
      <TableSectionProvider>
        <TableSectionToggler kanaTableSectionNames={kanaTableSectionNames} />
        <TableSection kanaCharacters={kanaCharacters} />
      </TableSectionProvider>
    </div>
  );
};

export default KanaTable;
