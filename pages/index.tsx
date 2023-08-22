import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Avtivities from "../components/activities";
import Article from "../components/article";
import Download from "../components/download";
import Experiences from "../components/experiences";
import Goals from "../components/goals";
import RootLayout, { getLayoytStaticProps } from "../components/layout";
import Media, { EMediaType } from "../components/media";
import Numbers from "../components/numbers";
import Partners from "../components/partners";
import Programs from "../components/programs";
import Slider from "../components/slider";
import Tools from "../components/tools";
import styles from "../styles/Home.module.css";
import { mockActivities, programs as programsList } from "../utils/constants";
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

export async function getStaticProps() {
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
    action: { text: "En savoir plus", link: "article" },
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
      link: `programs/${id}`,
    })),
  };
  const tools = {
    data: [
      {
        icon: require("../public/assets/toolicon1.png"),
        image: require("../public/assets/tool1.png"),
        text: "Associations accréditées",
        link: "association-accredité",
      },
      {
        icon: require("../public/assets/toolicon2.png"),
        image: require("../public/assets/tool2.png"),
        text: "Complexes Lalla Meryem",
        link: "complexe-lala-meryem",
      },
      {
        icon: require("../public/assets/toolicon3.png"),
        image: require("../public/assets/tool3.png"),
        text: "Déclaration de Marrakech",
        link: "delcaration-de-marakech",
      },
    ],
    title: "Nos Moyens",
  };
  const activities = mockActivities;
  const media = {
    title: "Espace Media",
    action: { text: "En savoir plus", link: "media" },
    data: [
      {
        title:
          "Étapes phares dans le processus de promotion de la condition de la femme et de la fille - 2022",
        type: EMediaType.video,
        src: "https://www.youtube.com/watch?v=xmlykrsN7Ok",
        link: "media1",
      },
      {
        title: `L'exposition numérique d’art plastique sur le phénomène de la violence faite aux femmes`,
        type: EMediaType.video,
        src: "https://www.youtube.com/watch?v=xmlykrsN7Ok",
        link: "media2",
      },
      {
        title:
          "Cérémonie de célébration de la Journée Internationale de la Femme 8 Mars 2020",
        type: EMediaType.image,
        src: require("../public/assets/media3.png"),
        link: "media3",
      },
    ],
  };

  const experiences = {
    title: "Elles nous parlent de leur expérience",
    data: [
      {
        personImage: require("../public/assets/person-experience.png"),
        name: "Mme. Shamsal Houda ABAKAR KADADé",
        fonction:
          "Présidente de la section «Solidatité et Développement Humain» République du Tchad",
        text: `Les formations organisées par l’UNFM auxquelles j’ai eu la chance de
      participer m’ont permis d’assimiler de nouvelles techniques et
      connaissances que j’ai transmises aux femmes tchadiennes afin qu’elles
      gagnent en indépendance. J’espère de tout cœur poursuivre ce
      partenariat avec « l’institution au grand cœur » qu’est l’UNFM.`,
      },
      {
        personImage: require("../public/assets/person-experience.png"),
        name: "Mme. Shamsal Houda ABAKAR KADADé",
        fonction:
          "Présidente de la section «Solidatité et Développement Humain» République du Tchad",
        text: `Les formations organisées par l’UNFM auxquelles j’ai eu la chance de
      participer m’ont permis d’assimiler de nouvelles techniques et
      connaissances que j’ai transmises aux femmes tchadiennes afin qu’elles
      gagnent en indépendance. J’espère de tout cœur poursuivre ce
      partenariat avec « l’institution au grand cœur » qu’est l’UNFM.`,
      },
    ],
  };

  const partners = {
    title: "Nos Partenaires",
    data: [
      {
        title: "Partenaires internationaux",
        partners: [
          require("../public/assets/partner1.png"),
          require("../public/assets/partner2.png"),
          require("../public/assets/partner3.png"),
          require("../public/assets/partner4.png"),
        ],
      },
      {
        title: "Partenaires nationaux institutionnels",
        partners: [
          require("../public/assets/partner5.png"),
          require("../public/assets/partner6.png"),
          require("../public/assets/partner7.png"),
          require("../public/assets/partner8.png"),
          require("../public/assets/partner9.png"),
          require("../public/assets/partner1.png"),
        ],
      },
      {
        title: "Partenaires nationaux privés",

        partners: [
          require("../public/assets/partner1.png"),
          require("../public/assets/partner6.png"),
          require("../public/assets/partner5.png"),
          require("../public/assets/partner8.png"),
          require("../public/assets/partner9.png"),
          require("../public/assets/partner2.png"),
          require("../public/assets/partner3.png"),
          require("../public/assets/partner4.png"),
          require("../public/assets/partner7.png"),
        ],
      },
    ],
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

  const layout = await getLayoytStaticProps();
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

export default Home;
