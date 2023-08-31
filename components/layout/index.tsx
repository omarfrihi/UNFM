import { Metadata } from "next";
import Topbar, { TopbarProps } from "../Topbar";
import { theme } from "../../theme/emotion";
import ThemeProvider from "../theme-provider";

import Navbar, { NavbarProps } from "../navbar";
import Footer, { FooterProps } from "../footer";
import TopbarMobile from "../TopbarMobile";
import { programs } from "../../utils/constants";
import axios from "axios";
import { getFooter, getNavBar, getTopBar } from "../../strapi/api";

export type LayoutProps = {
  children: React.ReactNode;
  topbar: TopbarProps;
  footer: FooterProps;
  navbar: NavbarProps;
};
const RootLayout = ({ children, topbar, footer, navbar }: LayoutProps) => {
  return (
    <>
      <TopbarMobile {...navbar} />
      <Topbar {...topbar} />
      <Navbar {...navbar} />
      {children}
      <Footer {...footer} />
    </>
  );
};

export const getLayoytStaticProps = async (locale: string) => {
  try {
    const topbar = await getTopBar(locale);
    const footer = await getFooter(locale);
    const navbar = await getNavBar(locale);
    return {
      topbar,
      footer,
      navbar,
    };
  } catch (e) {
    return {};
  }
};
export default RootLayout;
