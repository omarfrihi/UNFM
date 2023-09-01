import RootLayout, { getLayoytStaticProps } from "../components/layout";

const NotFound = ({ data }: any) => {
  const { layout } = JSON.parse(data);

  return <RootLayout {...layout}>{"Page not Found"}</RootLayout>;
};

export default NotFound;

export async function getStaticProps({ locale }: { locale: string }) {
  const layout = await getLayoytStaticProps(locale);

  return {
    props: {
      data: JSON.stringify({ layout }),
    },
    revalidate: 5,
  };
}
