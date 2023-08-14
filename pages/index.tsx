import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Article from "../components/article";
import Goals from "../components/goals";
import Numbers from "../components/numbers";
import Slider from "../components/slider";
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
    </>
  );
};

export default Home;
