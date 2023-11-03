import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseApiUrl } from '@/constants/urls';
import { KanaType, Word } from '@/types/Word';
import { RootState } from '../store';

interface GetAllWordsQueryParams {
  kanaType: KanaType;
  kanaCharacters?: string;
  minKanaSymbols?: number;
  maxKanaSymbols?: number;
  limit?: number;
}

export const getAllWordsCacheSelector = (state: RootState): Word[] => {
  const queries = Object.values(state.hikanaApi.queries).filter(
    (query) => query!.endpointName === 'getAllWords',
  );
  return queries[queries.length - 1]!.data as Word[];
};

export default createApi({
  reducerPath: 'hikanaApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseApiUrl }),
  tagTypes: ['Words'],
  endpoints: (builder) => ({
    getAllWords: builder.query<Word[], GetAllWordsQueryParams>({
      query: (params) => {
        return {
          url: 'words',
          params,
        };
      },
      providesTags: [{ type: 'Words', id: 'LIST' }],
    }),
  }),
});
