'use client';
import Head from 'next/head';

const SEO = ({ pageTitle, font }: { pageTitle: string; font?: string }) => (
  <Head>
    <title>{pageTitle && `${pageTitle} || Truth And Life Academy`}</title>
    <meta httpEquiv='x-ua-compatible' content='ie=edge' />
    <meta name='description' content='Generated by create next app' />
    <meta name='robots' content='noindex, follow' />
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1, shrink-to-fit=no'
    />
    {font && <link href={font} rel='stylesheet' />}
    <link rel='icon' href='/favicon.ico' />
  </Head>
);

export default SEO;
