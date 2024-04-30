'use client';

import { usePathname } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { useEffect } from 'react';
import sal from 'sal.js';

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap');
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const router = usePathname();

  useEffect(() => {
    sal({ threshold: 0.1, once: true, root: null }); // or root: undefined
  }, [router]);

  useEffect(() => {
    sal();
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
