import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Avtivities from "../components/activities";
import Article from "../components/article";
import Experiences from "../components/experiences";
import Goals from "../components/goals";
import Media from "../components/media";
import Numbers from "../components/numbers";
import Partners from "../components/partners";
import Programs from "../components/programs";
import Slider from "../components/slider";
import Tools from "../components/tools";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>UNFM</title>
        <meta name="description" content="unfm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <Article />
      <Numbers />
      <Goals />
      <Programs />
      <Tools />
      <Avtivities />
      <Media />
      <Experiences />
      <Partners />
    </>
  );
};

export default Home;
