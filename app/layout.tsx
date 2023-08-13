"use client";
import { Metadata } from "next";
import Topbar from "../components/Topbar";
import { theme } from "../theme/emotion";
import ThemeProvider from "./theme-provider";
import "../styles/fonts.css";
import "../styles/globals.css";

import Navbar from "../components/navbar";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <Topbar />
          <Navbar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
};

export default RootLayout;
