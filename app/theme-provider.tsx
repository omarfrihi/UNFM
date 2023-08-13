"use client";
import { ThemeProvider as EmotionProvider } from "@emotion/react";
import { theme } from "../theme/emotion";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <EmotionProvider theme={theme}>{children}</EmotionProvider>;
};

export default ThemeProvider;
