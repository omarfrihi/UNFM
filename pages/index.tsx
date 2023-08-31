import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Avtivities, { ActivitiesProps } from "../components/activities";
import Article, { ArticleProps } from "../components/article";
import Download, { DownloadProps } from "../components/download";
import Experiences, { ExperiencesProps } from "../components/experiences";
import Goals, { GoalsProps } from "../components/goals";
import RootLayout, {
  LayoutProps,
  getLayoytStaticProps,
} from "../components/layout";
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
import { groupBy, isEmpty } from "lodash";
import { getHomepage } from "../strapi/api";
import WithLayout from "../hoc";

export type HomeProps = {
  title: string;
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

const Home = ({ data }: { data: HomeProps }) => {
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
  } = data;

  return (
    <>
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
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const layout = await getLayoytStaticProps(locale);
  let data = { layout };
  try {
    const homepage = await getHomepage(locale);

    data = {
      ...homepage,
      ...data,
    };
  } catch (e) {
    console.log("eee", e);
  }

  return {
    props: {
      data,
    },
    revalidate: true,
  };
}

export default WithLayout(Home);
