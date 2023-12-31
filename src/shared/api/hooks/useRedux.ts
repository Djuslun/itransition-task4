import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDispath, RootState } from 'app/store';

export const useAppDispath = () => useDispatch<AppDispath>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
