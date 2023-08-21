import { Metadata } from "next";
import Topbar, { TopbarProps } from "../Topbar";
import { theme } from "../../theme/emotion";
import ThemeProvider from "../theme-provider";

import Navbar, { NavbarProps } from "../navbar";
import Footer, { FooterProps } from "../footer";
import TopbarMobile from "../TopbarMobile";
const RootLayout = ({
  children,
  topbar,
  footer,
  navbar,
}: {
  children: React.ReactNode;
  topbar: TopbarProps;
  footer: FooterProps;
  navbar: NavbarProps;
}) => {
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
  const navbar = {
    data: [
      { title: "Accueil", link: "/" },
      {
        title: "UNFM",

        subMenu: [
          { title: "Qui sommes nous?", link: "/who-us" },
          { title: "Discours fondateur", link: "/discours" },
          { title: "Les allocutions princières", link: "/allocutions" },
        ],
      },
      { title: "history", link: "/history" },
      { title: "Journée de la femme", link: "/8mars" },

      {
        title: "Activités",
        link: "activities",
      },
      {
        title: "Programmes",
        isCard: true,
        actions: [
          { text: "Tous les Programmes", link: "/programs" },
          { text: "Toutes Nos Catégories", link: "/categories" },
        ],
        subMenu: [
          {
            title: "Programme 1",
            link: "/programs/1",
            image: require("../../public/assets/program1.png"),
          },
          {
            title: "Programme 2",
            link: "/programs/2",
            image: require("../../public/assets/program2.png"),
          },
          {
            title: "Programme 3",
            link: "/programs/3",
            image: require("../../public/assets/program3.png"),
          },
        ],
      },
      { title: "Associations accréditées", link: "/associations-accredité" },
    ],
  };
  const props = {
    topbar,
    footer,
    navbar,
  };

  return props;
};
export default RootLayout;
