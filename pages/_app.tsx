import '@/styles/globals.css';

import { StoreProvider } from '@/utils/Store';
import type { AppProps } from 'next/app';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-5N14NHXLTE"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-5N14NHXLTE');
                `}
      </Script>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
