import '../styles/globals.scss'
import { wrapper } from '../store/index';
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App);
