import type { Metadata, NextPage } from "next";
import styles from "../styles/Home.module.css";

import Head from "next/head";
export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};
const Home: NextPage = () => {
  return (
    <div></div>
    // <div className={styles.container}>
    //   <main className={styles.main}>
    //     <h1 className={styles.title_gilroy}>
    //       Whereas disregard and contempt for human rights have resulted
    //     </h1>
    //     <h1 className={styles.title_poppins}>
    //       Whereas disregard and contempt for human rights have resulted
    //     </h1>
    //     <h1 className={styles.title_tajawal}>
    //       Whereas disregard and contempt for human rights have resulted
    //     </h1>
    //   </main>
    // </div>
  );
};

export default Home;
