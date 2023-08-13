import { Metadata } from "next";
import { theme } from "../theme/emotion";
import ThemeProvider from "./theme-provider";
export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
};

export default RootLayout;
