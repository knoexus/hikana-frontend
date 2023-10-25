import { KanaType } from '@/types/Word';
import { stripOfFirstSymbol } from '@/utilities/string';
import { usePathname } from 'next/navigation';

export const useKanaTypeFromPath = (): KanaType =>
  stripOfFirstSymbol(usePathname()) as KanaType;
