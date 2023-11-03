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
  kana: string;
}

interface TippedKanaCharacter {
  tips?: string[];
}

export type KanaTableCharacter = BaseKanaCharacter & { tableProps: TableProps };

export type KanaCharacter = KanaTableCharacter & TippedKanaCharacter;

export type KanaTableCharacterNoKana = Omit<KanaTableCharacter, 'kana'>;

export type KanaCharacterNoKana = Omit<KanaCharacter, 'kana'>;

export type KanaTableCharactersMapping = {
  [key: string]: KanaTableCharacterNoKana;
};

export type KanaCharactersMapping = {
  [key: string]: KanaCharacterNoKana;
};

export type KanaCharacterTipsMapping = {
  [key: string]: string[] | undefined;
};
