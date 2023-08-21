import Activity from "../../components/activity-page";
import Cover from "../../components/who-us/cover";
import { mockActivities } from "../../utils/constants";
import RootLayout, { getLayoytStaticProps } from "../../components/layout";
import Article from "../../components/who-us/article";

const Activities = ({ data }: any) => {
  const { layout, activity } = JSON.parse(data);
  return (
    <RootLayout {...layout}>
      {activity ? (
        <>
          <Cover
            data={{
              fullMode: true,
              image: activity.articles[0].image,
            }}
          ></Cover>
          <Article
            data={activity.articles.map(
              ({
                image,
                description,
              }: {
                image: string;
                description: string[];
              }) => ({
                image,
                content: description,
              })
            )}
          />
        </>
      ) : (
        "notfound"
      )}
    </RootLayout>
  );
};

export async function getStaticProps({ params }: { params: { id: string } }) {
  const layout = await getLayoytStaticProps();
  const activity = mockActivities.data.find(({ link }) => link === params.id);

  return {
    props: {
      data: JSON.stringify({ layout, activity }),
    },
    revalidate: true,
  };
}

export async function getStaticPaths() {
  const activites = mockActivities.data.map(({ link }) => ({
    params: { id: link },
  }));

  return {
    paths: activites,
    fallback: "blocking",
  };
}

export default Activities;
