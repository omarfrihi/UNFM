import { isEmpty } from "lodash";
import RootLayout, { getLayoytStaticProps } from "../components/layout";

const NotFound = ({ data }: any) => {
  const { layout } = data;
  if (isEmpty(layout)) return <>Error Strapi</>;
  return <RootLayout {...layout}>{"Page not Found"}</RootLayout>;
};

export default NotFound;

export async function getStaticProps({ locale }: { locale: string }) {
  const layout = await getLayoytStaticProps(locale);

  return {
    props: {
      data: { layout },
    },
    revalidate: true,
  };
}
