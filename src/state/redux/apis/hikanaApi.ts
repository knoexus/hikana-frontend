import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseApiUrl } from '@/constants/urls';
import { Word } from '@/types/Word';

interface GetAllWordsQueryParams {
  kanaType: string;
  kanaSyllables?: string;
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
