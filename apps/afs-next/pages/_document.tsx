
// eslint-disable-next-line
const newrelic = require("newrelic");

import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

const _Document = (props: DocumentInitialProps & { browserTimingHeader: string}) => {

  
  return (
    <Html>
      <Head>
        <link href="https://use.typekit.net/ssh4fpp.css" rel="stylesheet" />
        <script type="text/javascript" src="js/newrelic.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default _Document;