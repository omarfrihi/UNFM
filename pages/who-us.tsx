import Article from "../components/who-us/article";
import Cover from "../components/who-us/cover";
import { Text } from "../components/who-us/article/styles";

import History from "../components/who-us/history";
const articles = [
  {
    image: require("../public/assets/banner2.png"),
    title: "54 ans aux côtés des femmes et des filles du Maroc",
    content: (
      <>
        <Text>
          Créée en 1969 par Feu <b>Sa Majesté le Roi Hassan II </b>et placée,
          depuis 2003, sous la présidence de SAR{" "}
          <b>la Princesse Lalla Meryem</b>, l’Union Nationale des Femmes du
          Maroc œuvre, par une multitude d’actions concrètes et convergentes, à
          garantir les droits des femmes, à les protéger contre toutes formes de
          violences et à favoriser leur pleine participation à l’économie et au
          développement du Royaume.
        </Text>
        <Text>
          Pour ce faire, l’UNFM déploie une multitude de programmes destinés à
          soutenir les personnes en difficulté et à promouvoir la capacitation
          des femmes et des jeunes filles, un levier pour une croissance plus
          inclusive et plus durable.
        </Text>
      </>
    ),
  },

  {
    image: require("../public/assets/who-us2.png"),
    content: (
      <>
        <Text>
          <b>L’UNFM </b>déploie de multiples actions novatrices à même de
          renforcer l’inclusion effective des femmes dans la société en tant que
          citoyenne et force de production et ce, dans le cadre de la Vision
          Clairvoyante prônée par <b>Sa Majesté le Roi Mohammed VI</b>, que Dieu
          Le glorifie, érigeant la promotion du capital humain féminin en levier
          majeur de la dynamique de développement socio-économique du Royaume
        </Text>
        <Text>
          L’Union est présente dans les <b>12 régions du Maroc </b>avec divers
          programmes en faveur de l’éducation, de la capacitation,{" "}
          <b>
            de la formation, de l’insertion professionnelle et de
            l’entrepreneuriat féminin.
          </b>
        </Text>
      </>
    ),
  },

  {
    image: require("../public/assets/who-us3.png"),
    content: (
      <>
        <Text>
          Portée par <b>le leadership et l’avant-gardisme </b>de Sa Présidente,
          l’UNFM est en outre à l’initiative de conventions prônant une approche
          inclusive et participative en engageant toutes les forces vives du
          Royaume à apporter des <b>solutions exemplaires</b> afin de diffuser
          la culture de non-violence et les principes{" "}
          <b>d’équité et d’égalité </b>de genre à l’ensemble de la société.
        </Text>
        <Text>
          <b>L’UNFM</b>a également développé des centres de prises en charge
          spécialisés et des <b>programmes d’accompagnement</b>inédits
          permettant d’aiguiller les femmes et les filles en situation de
          précarité vers les services sécuritaires, institutionnels et
          juridiques compétents.
        </Text>
      </>
    ),
  },
];
const WhoUs = () => (
  <>
    <Cover image={require("../public/assets/banner2.png")} />
    <Article articles={articles} />
    <History />
  </>
);

export default WhoUs;
