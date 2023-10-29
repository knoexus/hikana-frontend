export const kanaTableSectionNames = [
  'Base',
  'Base Dakuten / Handakuten',
  'Double',
  'Double Dakuten / Handakuten',
  'Extended',
  'Extented Dakuten / Handakuten',
] as const;

export const hiraganaTableSectionNames = [...kanaTableSectionNames].slice(
  0,
  4,
) as string[];
export const katakanaTableSectionNames = [...kanaTableSectionNames] as string[];
