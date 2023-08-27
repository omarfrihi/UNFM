import { Metadata } from "next";
import Topbar, { TopbarProps } from "../Topbar";
import { theme } from "../../theme/emotion";
import ThemeProvider from "../theme-provider";

import Navbar, { NavbarProps } from "../navbar";
import Footer, { FooterProps } from "../footer";
import TopbarMobile from "../TopbarMobile";
import { programs } from "../../utils/constants";
import axios from "axios";
import { getTopBar } from "../../strapi/api";
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
  let props = {};
  try {
    const topbar = await getTopBar();

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
        { title: "Notre Histoire", link: "/history" },
        { title: "Journée de la femme", link: "/8mars" },

        {
          title: "Activités",
          link: "/activities",
        },
        {
          title: "Programmes",
          isCard: true,
          actions: [
            { text: "Tous les Programmes", link: "/programs" },
            { text: "Toutes Nos Catégories", link: "/programs" },
          ],
          subMenu: programs.map(({ id, image }) => ({
            image,
            link: `/programs/${id}`,
            title: id,
          })),
        },
        { title: "Associations accréditées", link: "/associations-accredite" },
      ],
    };
    props = {
      topbar,
      footer,
      navbar,
    };
  } catch (e) {}

  return props;
};
export default RootLayout;
