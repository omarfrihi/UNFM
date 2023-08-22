import Categories from "../../components/categories";
import RootLayout, { getLayoytStaticProps } from "../../components/layout";
import Cover from "../../components/who-us/cover";
import { categories, programs } from "../../utils/constants";

const Programs = ({ data }: any) => {
  const { layout, cover, programs } = JSON.parse(data);
  return (
    <RootLayout {...layout}>
      <Cover {...cover} />
      <Categories {...programs} />
    </RootLayout>
  );
};

export async function getStaticProps() {
  const cover = {
    data: {
      title: "Catégories",
      image: require("../../public/assets/categories.png"),
    },
  };

  const layout = await getLayoytStaticProps();
  const categoriesData = {
    data: {
      programs,
      categories,
    },
  };
  return {
    props: {
      data: JSON.stringify({ layout, cover, programs: categoriesData }),
    },
    revalidate: true,
  };
}

export default Programs;
