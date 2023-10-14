import { KanaCharacterDescription } from '../../../abstractions/KanaCharacterDescription';

export type TableSectionTogglerProps = {
  kanaTableSectionNames: string[];
};

export type TableSectionProps = {
  kanaCharacters: { [key: string]: KanaCharacterDescription };
};

export type KanaTableProps = TableSectionTogglerProps & TableSectionProps;
