import RootLayout, { getLayoytStaticProps } from "../components/layout";
import WithLayout from "../hoc";

const NotFound = ({ data }: any) => {
  return <>Page not Found</>;
};

export default WithLayout(NotFound);

export async function getStaticProps({ locale }: { locale: string }) {
  let data = {};
  try {
    const layout = await getLayoytStaticProps(locale);
    data = { layout };
  } catch {}

  return {
    props: {
      data,
    },
    revalidate: true,
  };
}
