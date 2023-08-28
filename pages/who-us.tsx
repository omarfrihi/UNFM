import Article from "../components/who-us/article";
import Cover from "../components/who-us/cover";
import { Text } from "../components/who-us/article/styles";
import RootLayout, { getLayoytStaticProps } from "../components/layout";

import History from "../components/who-us/history";
const WhoUs = ({ data }: any) => {
  const { article, cover, history, layout } = JSON.parse(data);
  return (
    <RootLayout {...layout}>
      <Cover {...cover} />
      <Article {...article} />
      <History {...history} />
    </RootLayout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const cover = {
    data: {
      title: "Qui sommes nous?",
      image: require("../public/assets/banner2.png"),
    },
  };
  const article = {
    data: [
      {
        image: require("../public/assets/banner2.png"),
        title: "54 ans aux côtés des femmes et des filles du Maroc",
        content: [
          `
      Créée en 1969 par Feu <b>Sa Majesté le Roi Hassan II </b>et placée,
      depuis 2003, sous la présidence de SAR
      <b>la Princesse Lalla Meryem</b>, l’Union Nationale des Femmes du
      Maroc œuvre, par une multitude d’actions concrètes et convergentes, à
      garantir les droits des femmes, à les protéger contre toutes formes de
      violences et à favoriser leur pleine participation à l’économie et au
      développement du Royaume.`,
          `Pour ce faire, l’UNFM déploie une multitude de programmes destinés à
      soutenir les personnes en difficulté et à promouvoir la capacitation
      des femmes et des jeunes filles, un levier pour une croissance plus
      inclusive et plus durable.`,
        ],
      },

      {
        image: require("../public/assets/who-us2.png"),
        content: [
          `
      L’UNFM </b>déploie de multiples actions novatrices à même de
            renforcer l’inclusion effective des femmes dans la société en tant que
            citoyenne et force de production et ce, dans le cadre de la Vision
            Clairvoyante prônée par <b>Sa Majesté le Roi Mohammed VI</b>, que Dieu
            Le glorifie, érigeant la promotion du capital humain féminin en levier
            majeur de la dynamique de développement socio-économique du Royaume`,
          `
            L’Union est présente dans les <b>12 régions du Maroc </b>avec divers
            programmes en faveur de l’éducation, de la capacitation,
            <b>
              de la formation, de l’insertion professionnelle et de
              l’entrepreneuriat féminin.
            </b>`,
        ],
      },

      {
        image: require("../public/assets/who-us3.png"),
        content: [
          `Portée par <b>le leadership et l’avant-gardisme </b>de Sa Présidente,
      l’UNFM est en outre à l’initiative de conventions prônant une approche
      inclusive et participative en engageant toutes les forces vives du
      Royaume à apporter des <b>solutions exemplaires</b> afin de diffuser
      la culture de non-violence et les principes
      <b>d’équité et d’égalité </b>de genre à l’ensemble de la société.`,
          `
      <b>L’UNFM</b> a également développé des centres de prises en charge
            spécialisés et des <b>programmes d’accompagnement</b> inédits
            permettant d’aiguiller les femmes et les filles en situation de
            précarité vers les services sécuritaires, institutionnels et
            juridiques compétents.`,
        ],
      },
    ],
  };

  const history = {
    data: {
      title: "Notre histoire",
      action: "Découvrir Notre Histoire",
      content: [
        `Grâce à notre timeline, découvrez, en images, la riche histoire de
      l’UNFM, ainsi que ses multiples actions qui ont accompagné l’évolution
      de la situation des femmes au Maroc tout au long de ces cinquante
      dernières années.`,
        `Présente sur la scène internationale et au Maroc, l’Union est, depuis
      1969, un acteur majeur de la défense des droits des femmes, de leur
      autonomisation et de la lutte pour l’éradication de toute forme de
      violence faites aux femmes et aux filles.`,
      ],
    },
  };
  const layout = await getLayoytStaticProps(locale);

  return {
    props: {
      data: JSON.stringify({
        layout,
        article,
        cover,
        history,
      }),
    },
    revalidate: true,
  };
}

// export async function getStaticPaths({ locales }: { locales: string[] }) {
//   const paths = locales.map((locale) => ({
//     locale,
//   }));
//   return {
//     paths,
//     fallback: "blocking",
//   };
// }
export default WhoUs;
