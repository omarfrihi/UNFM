import Activity, { ActivityProps } from "../../components/activity-page";
import Cover, { CoverProps } from "../../components/who-us/cover";
import { mockActivities } from "../../utils/constants";
import RootLayout, {
  LayoutProps,
  getLayoytStaticProps,
} from "../../components/layout";
import { getActivitiesPage } from "../../strapi/api";
import WithLayout from "../../hoc";
export type ActivitiesPageProps = {
  cover: CoverProps;
  activities: ActivityProps;
  title: string;
};
const Activities = ({ data }: { data: ActivitiesPageProps }) => {
  const { activities, cover } = data;
  return (
    <>
      <Cover {...cover} />
      <Activity {...activities}></Activity>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const layout = await getLayoytStaticProps(locale);

  let data = { layout };
  try {
    const activities = await getActivitiesPage(locale);
    data = { ...data, ...activities };
  } catch {}
  return {
    props: {
      data,
    },
    revalidate: 5,
  };
}

export default WithLayout(Activities);
