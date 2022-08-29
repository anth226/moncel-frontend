import { useEffect } from 'react';
import { wrapper } from '../store/index';
import '../styles/globals.scss';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    if(window) import('tw-elements');
  });
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
