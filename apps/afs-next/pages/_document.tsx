
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

const _Document = (props: DocumentInitialProps & { browserTimingHeader: string}) => {

  
  return (
    <Html>
      <Head>
        <link href="https://use.typekit.net/ssh4fpp.css" rel="stylesheet" />

        { process.env.NODE_ENV == "production" ? <script type="text/javascript" src="js/newrelic.js" async /> : null }
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default _Document;