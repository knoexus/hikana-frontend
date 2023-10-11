import useFetch from './useFetch';
import { baseUrl } from '@/constants/urls';

const useBaseUrlFetch = (path: string) => useFetch(`${baseUrl}/${path}`);

export default useBaseUrlFetch;
