'use client';

import * as React from 'react';
import '@/lib/env';

import HomeList from '@/components/home';
import Wrapper from '@/components/layout/wrapper';

export default function HomePage() {
  return (
    <>
      <Wrapper>
        <HomeList />
      </Wrapper>
    </>
  );
}
