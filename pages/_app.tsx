import "../styles/globals.css";
import "../styles/fonts.css";
import Head from "next/head";

import type { AppProps } from "next/app";
import ThemeProvider from "../components/theme-provider";
import RootLayout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>UNFM</title>
        <meta name="description" content="unfm" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
