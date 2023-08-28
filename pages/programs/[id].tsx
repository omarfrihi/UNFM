import Goals from "../../components/goals";
import RootLayout, { getLayoytStaticProps } from "../../components/layout";
import Numbers from "../../components/numbers";
import Article from "../../components/who-us/article";
import Cover from "../../components/who-us/cover";
import Activities from "../../components/activities";

import {
  medias,
  mockActivities,
  mockExperiences,
  mockPartners,
  programs,
} from "../../utils/constants";
import Media from "../../components/media";
import Partners from "../../components/partners";
import Experiences from "../../components/experiences";
import Navbar from "../../components/programNavbar";
import { flatten } from "lodash";

const Program = ({ data, id }: any) => {
  const {
    layout,
    program,
    activities,
    media,
    partners,
    experiences,
    sections,
  } = JSON.parse(data);
  return (
    <RootLayout {...layout}>
      {program ? (
        <>
          <Cover
            data={{
              image: program.cover,
              logo: program.image,
            }}
          ></Cover>
          <Navbar id={id} sections={sections} />
          <div id="presentation">
            <Article data={program.articles} />
          </div>
          <div id="goals">
            <Goals {...program.goals} />
          </div>
          <div id="numbers">
            <Numbers data={program.numbers} logo={program.image} />
          </div>
          <div id="activities">
            <Activities {...activities} />
          </div>
          <div id="medias">
            <Media {...media} />
          </div>
          <div id="partners">
            <Partners {...partners} />
          </div>
          <div id="experiences">
            <Experiences {...experiences} />
          </div>
        </>
      ) : (
        "notfound"
      )}
    </RootLayout>
  );
};

export async function getStaticProps({
  params,
  locale,
}: {
  params: { id: string };
  locale: string;
}) {
  const layout = await getLayoytStaticProps(locale);
  const program = programs.find(({ id }) => id === params.id);
  const media = {
    title: "Médiatheque",
    action: { text: "En savoir plus", link: "media" },
    data: medias,
  };
  const activities = {
    data: mockActivities,
    title: "Activités",
    action: "En Savoir plus",
  };

  const partners = {
    title: "Partenaires",
    data: [
      {
        title: "",
        partners: mockPartners.map(({ image }) => image),
      },
    ],
  };
  const experiences = {
    title: "Elles nous parlent de leur expérience",
    data: mockExperiences,
  };
  const sections = [
    { link: "presentation", title: "Présentation" },
    { link: "goals", title: "Objectifs" },
    { link: "numbers", title: "Chiffres Clés" },
    { link: "activities", title: "Activités" },
    { link: "medias", title: "Médiathèque" },
    { link: "partners", title: "Partenaires" },
    { link: "experiences", title: "Témoignages" },
  ];
  return {
    props: {
      id: params.id,
      data: JSON.stringify({
        layout,
        program,
        activities,
        media,
        partners,
        experiences,
        sections,
      }),
    },
    revalidate: true,
  };
}

export async function getStaticPaths({ locales }: { locales: string[] }) {
  const paths = flatten(
    locales.map((locale) =>
      programs.map(({ id }) => ({
        params: { id },
        locale,
      }))
    )
  );
  return {
    paths,
    fallback: "blocking",
  };
}

export default Program;
