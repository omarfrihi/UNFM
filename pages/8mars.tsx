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
import WithLayout from "../hoc";

export type WomenDayProps = {
  cover: CoverProps;
  article: ArticleProps;
  activities: ActivitiesProps;
  title: string;
};

const WomenDay = ({ data }: { data: WomenDayProps }) => {
  const { activities, cover, article } = data;
  return (
    <>
      <Cover {...cover} />
      <Article {...article} />
      <Activities {...activities}></Activities>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const layout = await getLayoytStaticProps(locale);
  let data = { layout };
  try {
    const womenDay = await getWomenDay(locale);
    data = {
      ...data,
      ...womenDay,
    };
  } catch {}

  return {
    props: {
      data,
    },
    revalidate: true,
  };
}

export default WithLayout(WomenDay);
