import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>UNFM</title>
        <meta name="description" content="unfm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title_gilroy}>
          Whereas disregard and contempt for human rights have resulted
        </h1>
        <h1 className={styles.title_poppins}>
          Whereas disregard and contempt for human rights have resulted
        </h1>
        <h1 className={styles.title_tajawal}>
          Whereas disregard and contempt for human rights have resulted
        </h1>
      </main>
    </div>
  );
};

export default Home;
