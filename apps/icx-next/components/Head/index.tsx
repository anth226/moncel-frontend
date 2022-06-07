// @ts-nocheck
import Head from 'next/head';
import { useRouter } from 'next/router'
import { SeoStoryblok } from 'moncel-one-sdk/cms/types';

const _Head = ({ seo }: { seo: SeoStoryblok }) => {
  const { asPath } = useRouter();

  return <Head>
    <title>{seo.seo_title}</title>
    <meta name="description" content={seo.seo_description} />
    <meta name="author" content="Instacert" />

    <meta property="og:title" content={seo.seo_title} />
    <meta property="og:url" content={`${process.env.BASE_URL}${asPath}`} />
    <meta property="og:description" content={seo.seo_description} />
    <meta property="og:site_name" content="Instacert" />
    <meta property="og:type" content="website" />

    <meta property="twitter:card" content="summary" />
    <meta property="twitter:title" content={seo.seo_title} />
    <meta property="twitter:description" content={seo.seo_description} />

    <link rel="canonical" href={`${process.env.BASE_URL}${asPath}`} />

    {/* bootstrap responsive viewport meta tag */}
    {/* <meta name="viewport" content="width=device-width, initial-scale=1" />  */}
    <link rel="preload" href="https://use.typekit.net/eqi8luf.css" as="style" crossOrigin="anonymous" onLoad="this.onload=null;this.rel='stylesheet'" />
    <noscript><link rel="stylesheet" href="https://use.typekit.net/eqi8luf.css" /></noscript>
    {/* <!–[if IE]> */}
    {/* <link rel="stylesheet" href="https://use.typekit.net/eqi8luf.css" crossorigin="anonymous" /> */}
    {/* <![endif]–> */}
    <link rel="icon" href="/favicon.png" />

  </Head>
};

export default _Head;