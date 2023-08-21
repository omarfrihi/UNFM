import Activity from "../components/activity-page";
import Cover from "../components/who-us/cover";
import { mockActivities } from "../utils/constants";
import RootLayout, { getLayoytStaticProps } from "../components/layout";

const Activities = ({ data }: any) => {
  const { activities, cover, layout } = JSON.parse(data);
  return (
    <RootLayout {...layout}>
      <Cover {...cover} />
      <Activity {...activities}></Activity>
    </RootLayout>
  );
};

export async function getStaticProps() {
  const cover = {
    data: {
      title: "Activités",
      image: require("../public/assets/activities.png"),
    },
  };
  const activities = {
    ...mockActivities,
    filters: {
      search: "Recherche",
      selects: [
        { name: "type d'activité", options: ["activité 1", "actiité 2"] },
        { name: "type de programme", options: ["programme 1", "programme 2"] },
        {
          name: "Associations accréditées",
          options: ["Association 1", "Association 2"],
        },
        { name: "Journées de le Femme", options: ["Journée 1", "Journée 2"] },
      ],
    },
  };
  const layout = await getLayoytStaticProps();

  return {
    props: {
      data: JSON.stringify({ activities, cover, layout }),
    },
    revalidate: true,
  };
}

export default Activities;