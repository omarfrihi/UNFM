import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Avtivities, { ActivitiesProps } from "../components/activities";
import Article, { ArticleProps } from "../components/article";
import Download, { DownloadProps } from "../components/download";
import Experiences, { ExperiencesProps } from "../components/experiences";
import Goals, { GoalsProps } from "../components/goals";
import RootLayout, { getLayoytStaticProps } from "../components/layout";
import Media, { EMediaType, MediaProps } from "../components/media";
import Numbers, { NumbersProps } from "../components/numbers";
import Partners, { PartnersProps } from "../components/partners";
import Programs, { ProgramsProps } from "../components/programs";
import Slider, { SliderProps } from "../components/slider";
import Tools, { ToolsProps } from "../components/tools";
import styles from "../styles/Home.module.css";
import {
  medias,
  mockActivities,
  mockExperiences,
  mockPartners,
  programs as programsList,
} from "../utils/constants";
import { groupBy } from "lodash";

export type HomeProps = {
  article: ArticleProps;
  slider: SliderProps;
  numbers: NumbersProps;
  goals: GoalsProps;
  programs: ProgramsProps;
  tools: ToolsProps;
  activities: ActivitiesProps;
  media: MediaProps;
  experiences: ExperiencesProps;
  partners: PartnersProps;
  download: DownloadProps;
};

const Home: NextPage = ({ data }: any) => {
  const {
    article,
    slider,
    numbers,
    goals,
    programs,
    tools,
    activities,
    media,
    experiences,
    partners,
    download,
    layout,
  } = JSON.parse(data);

  return (
    <RootLayout {...layout}>
      <Slider {...slider} />
      <Article {...article} />
      <Numbers {...numbers} />
      <Goals {...goals} />
      <Programs {...programs} />
      <Tools {...tools} />
      <Avtivities {...activities} />
      <Media {...media} />
      <Experiences {...experiences} />
      <Partners {...partners} />
      <Download {...download} />
    </RootLayout>
  );
};

export async function getStaticProps({ locale }: any) {
  const slider = {
    data: [
      require("../public/assets/banner2.png"),
      require("../public/assets/banner2.png"),
    ],
  };
  const article = {
    data: {
      image: require("../public/assets/article1.png"),
      title: "54 ans aux côtés des femmes et des filles du Maroc",
      content: [
        `Créée en 1969 par Feu <b>Sa Majesté le Roi Hassan II </b>et placée,
        depuis 2003, sous la présidence de SAR <b>la Princesse Lalla Meryem</b>,
        l’Union Nationale des Femmes du Maroc œuvre, par une multitude d’actions
        concrètes et convergentes, à garantir les droits des femmes, à les
        protéger contre toutes formes de violences et à favoriser leur pleine
        participation à l’économie et au développement du Royaume.`,

        `Pour ce faire, l’UNFM déploie une multitude de programmes destinés à
        soutenir les personnes en difficulté et à promouvoir la capacitation des
        femmes et des jeunes filles, un levier pour une croissance plus
        inclusive et plus durable.`,
      ],
    },
    action: { text: "En savoir plus", link: "/article" },
  };

  const numbers = {
    data: [
      {
        number: "51",
        description: "Associations régionales",
      },
      {
        number: "86",
        description: "Centres de formation et d'innovation",
      },
      {
        number: "24h/7",
        description: "Plateforme kolonamaak, appli et numéro vert ",
      },
      {
        number: "+39k",
        description: "Bénéficiaires directes à travers l'ensemble du Royaume",
      },
      {
        number: "26",
        description: "Centres d'écoute",
      },
    ],
  };
  const goals = {
    title: "Nos Objectifs",
    data: [
      {
        image: require("../public/assets/goal1.svg"),
        content: `Assurer la prise en charge d’urgence, l’assistance médicale et
    l’aide juridique et sociale des femmes et des jeunes filles en
    situation de vulnérabilité (violence, abus ou précarité
    socio-économique). Favoriser la santé maternelle et infantile.`,
      },
      {
        image: require("../public/assets/goal2.svg"),
        content: `Renforcer la capacitation des femmes et des jeunes filles à travers
    divers programmes d’autonomisation, de formation, d’encouragement à
    l’entrepreneuriat, de soutien aux activités génératrices de revenus
    et aux startups.`,
      },
      {
        image: require("../public/assets/goal3.svg"),
        content: `Promouvoir le préscolaire, lutter par tous les moyens contre la
              déperdition scolaire et encourager les jeunes filles issues de
              milieux défavorisés à poursuivre des études supérieures via l’octroi
              de bourses.`,
      },
      {
        image: require("../public/assets/goal4.svg"),
        content: `Diffuser la culture de non-violence et les principes d’équité et d’égalité de genre à l’ensemble de la société afin de permettre aux femmes de contribuer activement et effectivement au développement durable du Royaume.`,
      },
    ],
  };
  const programs = {
    title: "Nos Programmes",
    data: programsList.map(({ image, id }) => ({
      image,
      id,
    })),
  };
  const tools = {
    data: [
      {
        icon: require("../public/assets/toolicon1.png"),
        image: require("../public/assets/tool1.png"),
        text: "Associations accréditées",
        link: "/association-accredité",
      },
      {
        icon: require("../public/assets/toolicon2.png"),
        image: require("../public/assets/tool2.png"),
        text: "Complexes Lalla Meryem",
        link: "/complexe-lala-meryem",
      },
      {
        icon: require("../public/assets/toolicon3.png"),
        image: require("../public/assets/tool3.png"),
        text: "Déclaration de Marrakech",
        link: "/delcaration-de-marakech",
      },
    ],
    title: "Nos Moyens",
  };
  const activities = {
    title: "Nos Activités",
    action: "En Savoir Plus",
    data: mockActivities,
  };
  const media = {
    title: "Espace Media",
    action: { text: "En savoir plus", link: "/medias" },
    data: medias,
  };

  const experiences = {
    title: "Elles nous parlent de leur expérience",
    data: mockExperiences,
  };

  const partners = {
    title: "Nos Partenaires",
    data: Object.entries(groupBy(mockPartners, "type")).map(
      ([key, values]) => ({
        title: key,
        partners: values.map(({ image }) => image),
      })
    ),
  };
  const download = {
    downloadText: "Télécharger l'Application",
    data: [
      {
        androidLink: "https://www.android.com",
        iOsLink: "https://www.ios.com",
        icon: require("../public/assets/unfm-app-logo.png"),
        poster: require("../public/assets/unfm-app.png"),
      },
      {
        androidLink: "https://www.android.com",
        iOsLink: "https://www.ios.com",
        icon: require("../public/assets/withyou-app-logo.png"),
        poster: require("../public/assets/with-you-app.png"),
      },
    ],
  };

  const layout = await getLayoytStaticProps(locale);
  return {
    props: {
      data: JSON.stringify({
        article,
        slider,
        numbers,
        goals,
        programs,
        tools,
        activities,
        media,
        experiences,
        partners,
        download,
        layout,
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

export default Home;
