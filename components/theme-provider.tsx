import { ThemeProvider as EmotionProvider } from "@emotion/react";
import { theme } from "../theme/emotion";
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiTheme,
} from "@mui/material";

const muitheme = createTheme({});
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MuiTheme theme={muitheme}>
      <CssBaseline />
      <EmotionProvider theme={theme}>{children}</EmotionProvider>
    </MuiTheme>
  );
};

export default ThemeProvider;
