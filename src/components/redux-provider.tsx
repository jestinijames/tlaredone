'use client';

import { type ThemeProviderProps } from 'next-themes/dist/types';
import { Provider } from 'react-redux';

import { store } from '@/redux/store';

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap');
}

export function ReduxProvider({ children }: ThemeProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
