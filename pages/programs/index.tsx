import Categories, { CategoriesProps } from "../../components/categories";
import RootLayout, {
  LayoutProps,
  getLayoytStaticProps,
} from "../../components/layout";
import Cover, { CoverProps } from "../../components/who-us/cover";
import { getProgramsPage } from "../../strapi/api";
import { categories, programs } from "../../utils/constants";

export type ProgramsPageProps = {
  programs: CategoriesProps;
  cover: CoverProps;
};

const Programs = ({
  data,
}: {
  data: ProgramsPageProps & { layout: LayoutProps };
}) => {
  const { layout, cover, programs } = data;
  return (
    <RootLayout {...layout}>
      <Cover {...cover} />
      <Categories {...programs} />
    </RootLayout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const data = await getProgramsPage(locale);
  const layout = await getLayoytStaticProps(locale);

  return {
    props: {
      data: { layout, ...data },
    },
    revalidate: true,
  };
}

export default Programs;
