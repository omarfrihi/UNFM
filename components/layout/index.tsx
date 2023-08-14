import { Metadata } from "next";
import Topbar from "../Topbar";
import { theme } from "../../theme/emotion";
import ThemeProvider from "../theme-provider";

import Navbar from "../navbar";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Topbar />
      <Navbar />
      {children}
    </>
  );
};

export default RootLayout;
