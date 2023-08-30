import Article, { ArticleProps } from "../components/who-us/article";
import Cover, { CoverProps } from "../components/who-us/cover";
import { Text } from "../components/who-us/article/styles";
import Activities, { ActivitiesProps } from "../components/activities";
import { mockActivities } from "../utils/constants";
import RootLayout, {
  LayoutProps,
  getLayoytStaticProps,
} from "../components/layout";
import { getWomenDay } from "../strapi/api";

export type WomenDayProps = {
  cover: CoverProps;
  article: ArticleProps;
  activities: ActivitiesProps;
};

const WomenDay = ({
  data,
}: {
  data: WomenDayProps & { layout: LayoutProps };
}) => {
  const { activities, cover, article, layout } = data;
  return (
    <RootLayout {...layout}>
      <Cover {...cover} />
      <Article {...article} />
      <Activities {...activities}></Activities>
    </RootLayout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const data = await getWomenDay(locale);
  const layout = await getLayoytStaticProps(locale);

  return {
    props: {
      data: { ...data, layout },
    },
    revalidate: true,
  };
}

export default WomenDay;
