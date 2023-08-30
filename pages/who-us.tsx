import Article, { ArticleProps } from "../components/who-us/article";
import Cover, { CoverProps } from "../components/who-us/cover";
import { Text } from "../components/who-us/article/styles";
import RootLayout, {
  LayoutProps,
  getLayoytStaticProps,
} from "../components/layout";

import History, { HistoryProps } from "../components/who-us/history";
import { getWhoWeAre } from "../strapi/api";
export type WhoUsProps = {
  cover: CoverProps;
  article: ArticleProps;
  history: HistoryProps;
};

const WhoUs = ({ data }: { data: WhoUsProps & { layout: LayoutProps } }) => {
  const { article, cover, history, layout } = data;
  return (
    <RootLayout {...layout}>
      <Cover {...cover} />
      <Article {...article} />
      <History {...history} />
    </RootLayout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const data = await getWhoWeAre(locale);
  const layout = await getLayoytStaticProps(locale);

  return {
    props: {
      data: {
        layout,
        ...data,
      },
    },
    revalidate: true,
  };
}

export default WhoUs;
