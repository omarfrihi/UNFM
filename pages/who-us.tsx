import Article, { ArticleProps } from "../components/who-us/article";
import Cover, { CoverProps } from "../components/who-us/cover";
import { Text } from "../components/who-us/article/styles";
import RootLayout, {
  LayoutProps,
  getLayoytStaticProps,
} from "../components/layout";

import History, { HistoryProps } from "../components/who-us/history";
import { getWhoWeAre } from "../strapi/api";
import WithLayout from "../hoc";
export type WhoUsProps = {
  title: string;
  cover: CoverProps;
  article: ArticleProps;
  history: HistoryProps;
};

const WhoUs = ({ data }: { data: WhoUsProps }) => {
  const { article, cover, history } = data;
  return (
    <>
      <Cover {...cover} />
      <Article {...article} />
      <History {...history} />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const layout = await getLayoytStaticProps(locale);

  let data = { layout };
  try {
    const whoArewe = await getWhoWeAre(locale);

    data = {
      ...data,
      ...whoArewe,
    };
  } catch (e) {}

  return {
    props: {
      data,
    },
    revalidate: true,
  };
}

export default WithLayout(WhoUs);
