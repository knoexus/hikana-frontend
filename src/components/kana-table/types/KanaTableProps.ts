import { KanaTableCharacter } from '@/types/KanaCharacter';

export type TableSectionTogglerProps = {
  kanaTableSectionNames: string[];
};

export type TableSectionProps = {
  kanaTableCharactersArray: KanaTableCharacter[];
};

export type KanaTableProps = TableSectionTogglerProps & TableSectionProps;
