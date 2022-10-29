import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html style={{scrollBehavior:'smooth'}}>
      <Head>
        <link href="https://use.typekit.net/ssh4fpp.css" rel="stylesheet" />
        {/* tracking */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
