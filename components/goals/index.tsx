import Image from "next/image";
import { Card, CardsContainer, Content, Title, Wrapper } from "./styles";

const Goals = () => (
  <Wrapper>
    <Title>Nos Objectifs</Title>
    <CardsContainer>
      <Card>
        <Image
          width={40}
          height={40}
          alt="goal1"
          src={require("../../public/assets/goal1.svg")}
        ></Image>
        <Content>
          Assurer la prise en charge d’urgence, l’assistance médicale et l’aide
          juridique et sociale des femmes et des jeunes filles en situation de
          vulnérabilité (violence, abus ou précarité socio-économique).
          Favoriser la santé maternelle et infantile.
        </Content>
      </Card>
      <Card>
        <Image
          width={40}
          height={40}
          alt="goal1"
          src={require("../../public/assets/goal2.svg")}
        ></Image>
        <Content>
          Renforcer la capacitation des femmes et des jeunes filles à travers
          divers programmes d’autonomisation, de formation, d’encouragement à
          l’entrepreneuriat, de soutien aux activités génératrices de revenus et
          aux startups.
        </Content>
      </Card>
    </CardsContainer>
    <CardsContainer>
      <Card>
        <Image
          width={40}
          height={40}
          alt="goal3"
          src={require("../../public/assets/goal3.svg")}
        ></Image>
        <Content>
          Promouvoir le préscolaire, lutter par tous les moyens contre la
          déperdition scolaire et encourager les jeunes filles issues de milieux
          défavorisés à poursuivre des études supérieures via l’octroi de
          bourses.
        </Content>
      </Card>
      <Card>
        <Image
          width={40}
          height={40}
          alt="goal4"
          src={require("../../public/assets/goal4.svg")}
        ></Image>
        <Content>
          Diffuser la culture de non-violence et les principes d’équité et
          d’égalité de genre à l’ensemble de la société afin de permettre aux
          femmes de contribuer activement et effectivement au développement
          durable du Royaume.
        </Content>
      </Card>
    </CardsContainer>
  </Wrapper>
);

export default Goals;
