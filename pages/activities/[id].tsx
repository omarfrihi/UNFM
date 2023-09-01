import Activity from "../../components/activity-page";
import Cover from "../../components/who-us/cover";
import { mockActivities } from "../../utils/constants";
import RootLayout, {
  LayoutProps,
  getLayoytStaticProps,
} from "../../components/layout";
import Article from "../../components/who-us/article";
import Title from "../../components/title";
import { TitleWrapper } from "../../components/title/styles";
import { flatten } from "lodash";
import { ActivityType } from "../../components/activities";
import { Media } from "../../strapi/types";
import { getActivities, getActivity } from "../../strapi/api";
import WithLayout from "../../hoc";

const Activities = ({
  data,
}: {
  data: { activity: ActivityType; title: string };
}) => {
  const { activity } = data;
  return (
    <>
      {activity ? (
        <>
          <Cover
            data={{
              fullMode: true,
              image: activity.cover,
            }}
          ></Cover>
          <TitleWrapper>
            <Title>{activity.title}</Title>
          </TitleWrapper>
          <Article
            data={activity.articles.map(({ image, content }) => ({
              image,
              content,
            }))}
          />
        </>
      ) : (
        "notfound"
      )}
    </>
  );
};

export async function getStaticProps({
  params,
  locale,
}: {
  locale: string;
  params: { id: number };
}) {
  const layout = await getLayoytStaticProps(locale);
  let data = { layout } as any;

  try {
    const activity = await getActivity(locale, params.id);
    //
    data = { ...data, activity, title: activity.title };
  } catch (error) {}

  return {
    props: {
      data,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths({ locales }: { locales: string[] }) {
  const activities = await Promise.all(
    locales.map(async (locale) => {
      const activities = await getActivities(locale);
      return activities.map(({ id }: ActivityType) => ({
        params: { id: id.toString() },
        locale,
      }));
    })
  );

  const paths = flatten(activities);

  return {
    paths,
    fallback: "blocking",
  };
}

export default WithLayout(Activities);
