import Article from "../components/who-us/article";
import Cover from "../components/who-us/cover";
import { Text } from "../components/who-us/article/styles";
import Activities from "../components/activities";
import { mockActivities } from "../utils/constants";

const WomenDay = ({ data }: any) => {
  const { activities, cover, article } = JSON.parse(data);
  return (
    <>
      <Cover {...cover} />
      <Article {...article} />
      <Activities {...activities}></Activities>
    </>
  );
};

export async function getStaticProps() {
  const activities = mockActivities;
  const cover = {
    data: {
      title: "Journée de la femme",
      image: require("../public/assets/8mars.jpeg"),
    },
  };
  const article = {
    data: [
      {
        image: require("../public/assets/article1.png"),
        title: "Journées de la femme",
        content: [
          `b>
      Le 8 mars, Journée Internationale des Femmes - ou Journée
      Internationale des droits des Femmes
    </b>
    - est un moment privilégié durant lequel pour dresser le bilan de
    l’année et lancer de nouveaux projets.`,
          `<b>Quant au 10 octobre, Journée Nationale de la Femme,</b> elle est
    devenue la date d’évaluation des projets arrêtés`,
        ],
      },

      {
        backgroundColor: "rgba(216, 150, 32, 0.06)",
        image: require("../public/assets/8mars-1.png"),
        content: [
          ` À travers l’ensemble du Royaume, ces deux journées sont célébrées par
      les associations accréditées au travers de diverses manifestations
      allant de la sensibilisation au lancement de projets spécifiques à
      leur région.`,
        ],
      },
    ],
  };

  return {
    props: {
      data: JSON.stringify({ activities, cover, article }),
    },
    revalidate: true,
  };
}

export default WomenDay;
