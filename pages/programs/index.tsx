import Categories, { CategoriesProps } from "../../components/categories";
import RootLayout, {
  LayoutProps,
  getLayoytStaticProps,
} from "../../components/layout";
import Cover, { CoverProps } from "../../components/who-us/cover";
import WithLayout from "../../hoc";
import { getProgramsPage } from "../../strapi/api";
import { categories, programs } from "../../utils/constants";

export type ProgramsPageProps = {
  programs: CategoriesProps;
  cover: CoverProps;
  title: string;
};

const Programs = ({ data }: { data: ProgramsPageProps }) => {
  const { cover, programs } = data;
  return (
    <>
      <Cover {...cover} />
      <Categories {...programs} />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const layout = await getLayoytStaticProps(locale);
  let data = { layout };
  try {
    const programs = await getProgramsPage(locale);

    data = {
      ...programs,
      ...data,
    };
  } catch {}

  return {
    props: {
      data,
    },
    revalidate: true,
  };
}

export default WithLayout(Programs);
