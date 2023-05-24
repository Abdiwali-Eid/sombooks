import '@/styles/globals.css';

import { StoreProvider } from '@/utils/Store';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Component {...pageProps} />
    </StoreProvider>
  );
}
