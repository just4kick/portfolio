import Head from 'next/head';
import React, { useEffect } from 'react';
import { Layout } from '../components/layout';
import '../styles/global.css';
import { ShellProvider } from '../utils/shellProvider';
import { ThemeProvider } from '../utils/themeProvider';

const isTrackingEnabled = process.env.NEXT_PUBLIC_ENABLE_TRACKING === 'true';
const trackingUrl = process.env.NEXT_PUBLIC_TRACKING_URL;
const trackingWebsiteId = process.env.NEXT_PUBLIC_TRACKING_SITE_ID;

const App = ({ Component, pageProps }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };
  useEffect(() => {
    localStorage.setItem('visitedAt', new Date().toString());
  }, []);

  return (
    <ThemeProvider>
      <ShellProvider>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />

          {isTrackingEnabled && (
            <script
              async
              src={trackingUrl}
              data-website-id={trackingWebsiteId}
            ></script>
          )}
        </Head>

        <Layout onClick={onClickAnywhere}>
          <Component {...pageProps} inputRef={inputRef} />
        </Layout>
      </ShellProvider>
    </ThemeProvider>
  );
};

export default (props) => {
  return <App {...props} />;
};
