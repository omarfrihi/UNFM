import "../styles/globals.css";
import "../styles/fonts.css";

import type { AppProps } from "next/app";
import ThemeProvider from "./theme-provider";
import RootLayout from "./layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ThemeProvider>
  );
}

export default MyApp;
