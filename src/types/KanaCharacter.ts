import { kanaTableSectionNames } from '@/constants/kanaTable';

interface TablePosition {
  row: number;
  column: number;
}

export type TableSection = (typeof kanaTableSectionNames)[number];

export interface TableProps {
  section: TableSection;
  position: TablePosition;
}

interface BaseKanaCharacter {
  romaji: string;
}

export interface KanaCharacter extends BaseKanaCharacter {
  kana: string;
}

export interface BaseKanaTableCharacter extends BaseKanaCharacter {
  tableProps: TableProps;
}

export type KanaTableCharacter = KanaCharacter & BaseKanaTableCharacter;
