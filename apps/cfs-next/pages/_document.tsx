import { Html, Head, Main, NextScript, DocumentInitialProps } from 'next/document';

const _Document = (props: DocumentInitialProps & { browserTimingHeader: string}) => {
  
  return (
    <Html>
      <Head>
        <link href="https://use.typekit.net/ssh4fpp.css" rel="stylesheet" />
        {/* need to create a monitor in newrelic */}
        {/* { process.env.NODE_ENV == "production" ? <script type="text/javascript" src="js/newrelic.js" async /> : null } */}
      </Head>
      <body className="pointer-events-none">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default _Document;
