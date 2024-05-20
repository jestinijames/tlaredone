import { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import * as React from 'react';

import '../styles/scss/index.scss';

import Theme from '@/components/common/theme';
import { ReduxProvider } from '@/components/redux-provider';
import { ThemeProvider } from '@/components/theme-provider';

import { siteConfig } from '@/constant/config';
import AuthProvider from '@/providers/AuthProvider';
import { TRPCReactProvider } from '@/trpc/react';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },

  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,

  authors: [
    {
      name: 'Jestin James',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ReduxProvider>
          <TRPCReactProvider>
            <AuthProvider>
              <ThemeProvider defaultTheme='light'>
                <NextTopLoader
                  color='#2299DD'
                  initialPosition={0.08}
                  crawlSpeed={200}
                  height={3}
                  crawl={true}
                  showSpinner={true}
                  easing='ease'
                  speed={200}
                  shadow='0 0 10px #2299DD,0 0 5px #2299DD'
                  template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                  zIndex={1600}
                  showAtBottom={false}
                />
                {children}
                <Theme />
              </ThemeProvider>
            </AuthProvider>
          </TRPCReactProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
