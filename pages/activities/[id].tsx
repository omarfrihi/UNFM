import Activity from "../../components/activity-page";
import Cover from "../../components/who-us/cover";
import { mockActivities } from "../../utils/constants";
import RootLayout, { getLayoytStaticProps } from "../../components/layout";
import Article from "../../components/who-us/article";
import Title from "../../components/title";
import { TitleWrapper } from "../../components/title/styles";

const Activities = ({ data }: any) => {
  const { layout, activity } = JSON.parse(data);
  return (
    <RootLayout {...layout}>
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
  const activity = mockActivities.find(({ id }) => id === params.id);

  return {
    props: {
      data: JSON.stringify({ layout, activity }),
    },
    revalidate: true,
  };
}

export async function getStaticPaths() {
  const activites = mockActivities.map(({ id }) => ({
    params: { id },
  }));

  return {
    paths: activites,
    fallback: "blocking",
  };
}

export default Activities;
