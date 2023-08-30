import Activity, { ActivityProps } from "../../components/activity-page";
import Cover, { CoverProps } from "../../components/who-us/cover";
import { mockActivities } from "../../utils/constants";
import RootLayout, {
  LayoutProps,
  getLayoytStaticProps,
} from "../../components/layout";
import { getActivitiesPage } from "../../strapi/api";
export type ActivitiesPageProps = {
  cover: CoverProps;
  activities: ActivityProps;
};
const Activities = ({
  data,
}: {
  data: ActivitiesPageProps & { layout: LayoutProps };
}) => {
  const { activities, cover, layout } = data;
  return (
    <RootLayout {...layout}>
      <Cover {...cover} />
      <Activity {...activities}></Activity>
    </RootLayout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const data = await getActivitiesPage(locale);
  const layout = await getLayoytStaticProps(locale);

  return {
    props: {
      data: { ...data, layout },
    },
    revalidate: true,
  };
}

export default Activities;
