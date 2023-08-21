import { Metadata } from "next";
import Topbar, { TopbarProps } from "../Topbar";
import { theme } from "../../theme/emotion";
import ThemeProvider from "../theme-provider";

import Navbar from "../navbar";
import Footer, { FooterProps } from "../footer";
import TopbarMobile from "../TopbarMobile";
const RootLayout = ({
  children,
  topbar,
  footer,
}: {
  children: React.ReactNode;
  topbar: TopbarProps;
  footer: FooterProps;
}) => {
  return (
    <>
      <TopbarMobile />
      <Topbar {...topbar} />
      <Navbar />
      {children}
      <Footer {...footer} />
    </>
  );
};

export const getLayoytStaticProps = async () => {
  const topbar = {
    data: {
      callUs: "Appelez-nous:",
      phoneNumber: "8350",
      languages: [
        { label: "Fr", value: "fr" },
        { label: "En", value: "en" },
        { label: "Ar", value: "ar" },
      ],
      download: {
        text: "télécharger l’application:",
        appName: "KOLONAMA",
        link: "donwload",
      },
    },
  };
  const footer = {
    data: {
      contactUs: "Nous contactez:",
      phoneNumbers: ["05 37 63 13 17", "05 37 63 12 91"],
      email: "contact@unfm.ma",
      copytight: "Copyright © UNFM 2023 Tous droits réservés",
    },
  };
  const props = {
    topbar,
    navbar: {},
    footer,
  };

  return props;
};
export default RootLayout;
