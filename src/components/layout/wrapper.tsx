import React from 'react';
import { ToastContainer } from 'react-toastify';

import ScrollToTop from '@/components/ui/scroll-to-top';

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ScrollToTop />
      <ToastContainer />
    </>
  );
}
