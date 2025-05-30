import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Qualquer inicialização do lado do cliente
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;