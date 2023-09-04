import Activities, { ActivitiesProps } from "../../components/activities";
import Goals, { GoalsProps } from "../../components/goals";
import { getLayoytStaticProps } from "../../components/layout";
import Numbers, { NumbersProps } from "../../components/numbers";
import Article, { ArticleProps } from "../../components/who-us/article";
import Cover, { CoverProps } from "../../components/who-us/cover";

import { flatten } from "lodash";
import Experiences, { ExperiencesProps } from "../../components/experiences";
import Media, { MediaProps } from "../../components/media";
import Partners, { PartnersProps } from "../../components/partners";
import Navbar, { ProgramsNavbarProps } from "../../components/programNavbar";
import WithLayout from "../../hoc";
import { getProgram, getPrograms } from "../../strapi/api";
export type ProgramProps = {
  title: string;
  program: {
    articles: ArticleProps;
    cover: CoverProps;
    goals: GoalsProps;
    numbers: NumbersProps;
  };
  activities: ActivitiesProps;
  media: MediaProps;
  partners: PartnersProps;
  experiences: ExperiencesProps;
  sections: ProgramsNavbarProps;
};

export enum ENavbarSections {
  PRESENTATION = "presentation",
  GOALS = "goals",
  NUMBERS = "numbers",
  ACTIVITIES = "activities",
  MEDIAS = "medias",
  PARTNERS = "partners",
  EXPERIENCES = "experiences",
}
const Program = ({ data }: { data: ProgramProps }) => {
  console.log("data", data);
  const { program, activities, media, partners, experiences, sections } = data;
  return (
    <>
      <>
        <Cover {...program.cover}></Cover>
        <Navbar {...sections} />
        <div id={ENavbarSections.PRESENTATION}>
          <Article {...program.articles} />
        </div>
        <div id={ENavbarSections.GOALS}>
          <Goals {...program.goals} />
        </div>
        <div id={ENavbarSections.NUMBERS}>
          <Numbers {...program.numbers} />
        </div>
        <div id={ENavbarSections.ACTIVITIES}>
          <Activities {...activities} />
        </div>
        <div id={ENavbarSections.MEDIAS}>
          <Media {...media} />
        </div>
        <div id={ENavbarSections.PARTNERS}>
          <Partners {...partners} />
        </div>
        <div id={ENavbarSections.EXPERIENCES}>
          <Experiences {...experiences} />
        </div>
      </>
    </>
  );
};

export async function getStaticProps({
  params,
  locale,
}: {
  params: { id: number };
  locale: string;
}) {
  const layout = await getLayoytStaticProps(locale);
  let data = { layout };
  try {
    const program = await getProgram(locale, params.id);
    data = { ...data, ...program };
  } catch (e) {}
  return {
    props: {
      id: params.id,
      data,
    },
    revalidate: true,
  };
}

export async function getStaticPaths({ locales }: { locales: string[] }) {
  const programs = await Promise.all(
    locales.map(async (locale) => {
      const programs = await getPrograms(locale);
      return programs.map(({ id }: { id: number }) => ({
        params: { id: id.toString() },
        locale,
      }));
    })
  );

  const paths = flatten(programs);
  return {
    paths,
    fallback: "blocking",
  };
}

export default WithLayout(Program);
