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
        <meta name="description" content="unfm" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="'https://fonts.cdnfonts.com/css/gelasio:wght@100;200;300;400;500;600;700;800'"
        />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
