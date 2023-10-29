import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseApiUrl } from '@/constants/urls';
import { KanaType, Word } from '@/types/Word';

interface GetAllWordsQueryParams {
  kanaType: KanaType;
  kanaSyllables?: string;
  minKanaSyllables?: number;
  maxKanaSyllables?: number;
  limit?: number;
}

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
