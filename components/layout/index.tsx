import { Metadata } from "next";
import Topbar from "../Topbar";
import { theme } from "../../theme/emotion";
import ThemeProvider from "../theme-provider";

import Navbar from "../navbar";
import Footer from "../footer";
import TopbarMobile from "../TopbarMobile";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopbarMobile />
      <Topbar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
