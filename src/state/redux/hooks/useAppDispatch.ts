import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/state/redux/store';

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
