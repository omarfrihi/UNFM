import "../styles/globals.css";
import "../styles/fonts.css";

import type { AppProps } from "next/app";
import ThemeProvider from "./theme-provider";
import RootLayout from "./layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>UNFM</title>
        <meta name="description" content="unfm" />
        <link rel="icon" href="/favicon.ico" />
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
