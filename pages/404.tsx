import RootLayout, { getLayoytStaticProps } from "../components/layout";

const NotFound = ({ data }: any) => {
  const { layout } = JSON.parse(data);

  return <RootLayout {...layout}>{"Page not Found"}</RootLayout>;
};

export default NotFound;

export async function getStaticProps() {
  const layout = await getLayoytStaticProps();

  return {
    props: {
      data: JSON.stringify({ layout }),
    },
    revalidate: true,
  };
}