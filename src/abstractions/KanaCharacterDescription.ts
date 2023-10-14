import { kanaTableSectionNames } from '@/constants/kanaTable';

interface TablePosition {
  row: number;
  column: number;
}

export type TableSection = (typeof kanaTableSectionNames)[number];

interface TableProps {
  section: TableSection;
  position: TablePosition;
}

interface KanaCharacterDescriptionParams {
  romaji: string;
  tableProps: TableProps;
  tips?: string[];
}

export class KanaCharacterDescription
  implements KanaCharacterDescriptionParams
{
  romaji: string;
  tableProps: TableProps;
  tips?: string[];

  constructor(params: KanaCharacterDescriptionParams) {
    this.romaji = params.romaji;
    this.tableProps = params.tableProps;
    this.tips = params.tips;
  }
}

export class HiraganaCharacter extends KanaCharacterDescription {
  constructor(params: KanaCharacterDescriptionParams) {
    super({ ...params });
  }
}

export class KatakanaCharacter extends KanaCharacterDescription {
  constructor(params: KanaCharacterDescriptionParams) {
    super({ ...params });
  }
}
