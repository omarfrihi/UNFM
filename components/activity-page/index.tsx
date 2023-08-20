import { ActivityComponent } from "../activities";
import { ActivityWrapper, SingleActivity, Wrapper } from "./styles";
const activities = [
  {
    image: require("../../public/assets/activity1.png"),
    tag: "Activités de l’UNFM",
    title: "Célébration de la Journée Internationale de la Femme 8 Mars 2021",
    description:
      "lancement de plusieurs programmes de développement au profit des femmes et des filles",
  },
  {
    image: require("../../public/assets/activity2.png"),
    tag: "Activités de l’UNFM",
    title:
      "L’Union Nationale des Femmes du Maroc récompense à Aghbala la lauréate de la première édition  du Prix Lalla Meryem de l’Innovation et de l’Excellence",
    description:
      "Aghbala (Province de Béni Mellal) – En application des Orientations Éclairées de Son Altesse Royale...",
  },
  {
    image: require("../../public/assets/activity2.png"),
    tag: "Activités de l’UNFM",
    title:
      "L’Union Nationale des Femmes du Maroc récompense à Aghbala la lauréate de la première édition  du Prix Lalla Meryem de l’Innovation et de l’Excellence",
    description:
      "Aghbala (Province de Béni Mellal) – En application des Orientations Éclairées de Son Altesse Royale...",
  },
  {
    image: require("../../public/assets/activity2.png"),
    tag: "Activités de l’UNFM",
    title:
      "L’Union Nationale des Femmes du Maroc récompense à Aghbala la lauréate de la première édition  du Prix Lalla Meryem de l’Innovation et de l’Excellence",
    description:
      "Aghbala (Province de Béni Mellal) – En application des Orientations Éclairées de Son Altesse Royale...",
  },
  {
    image: require("../../public/assets/activity1.png"),
    tag: "Activités de l’UNFM",
    title: "Célébration de la Journée Internationale de la Femme 8 Mars 2021",
    description:
      "lancement de plusieurs programmes de développement au profit des femmes et des filles",
  },
  {
    image: require("../../public/assets/activity1.png"),
    tag: "Activités de l’UNFM",
    title: "Célébration de la Journée Internationale de la Femme 8 Mars 2021",
    description:
      "lancement de plusieurs programmes de développement au profit des femmes et des filles",
  },
  {
    image: require("../../public/assets/activity1.png"),
    tag: "Activités de l’UNFM",
    title: "Célébration de la Journée Internationale de la Femme 8 Mars 2021",
    description:
      "lancement de plusieurs programmes de développement au profit des femmes et des filles",
  },
];
const Activity = () => (
  <Wrapper>
    <ActivityWrapper>
      {activities.map((activity) => (
        <SingleActivity key={activity.title}>
          <ActivityComponent {...activity} />
        </SingleActivity>
      ))}
    </ActivityWrapper>
  </Wrapper>
);

export default Activity;
