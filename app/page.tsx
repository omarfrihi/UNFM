import type { Metadata, NextPage } from "next";
import Article from "../components/article";
import Numbers from "../components/numbers";
import Slider from "../components/slider";
export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};
const Home: NextPage = () => {
  return (
    <>
      <Slider />
      <Article />
      <Numbers />
    </>
  );
};

export default Home;
