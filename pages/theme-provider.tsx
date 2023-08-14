import { ThemeProvider as EmotionProvider } from "@emotion/react";
import { theme } from "../theme/emotion";
import { CssBaseline, ThemeProvider as MuiTheme } from "@mui/material";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MuiTheme theme={{}}>
      <CssBaseline />
      <EmotionProvider theme={theme}>{children}</EmotionProvider>
    </MuiTheme>
  );
};

export default ThemeProvider;
