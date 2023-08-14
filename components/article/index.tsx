import {
  Content,
  ImageWrapper,
  Img,
  Title,
  Wrapper,
  Text,
  ShowMore,
  ButtonWrapper,
  ButtonText,
} from "./styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
const Article = () => (
  <Wrapper>
    <ImageWrapper>
      <Image
        width={400}
        height={400}
        placeholder="blur"
        alt="article1"
        src={require("../../public/assets/article1.png")}
      ></Image>
    </ImageWrapper>
    <Content>
      <Title>54 ans aux côtés des femmes et des filles du Maroc</Title>
      <Text>
        Créée en 1969 par Feu <b>Sa Majesté le Roi Hassan II </b>et placée,
        depuis 2003, sous la présidence de SAR <b>la Princesse Lalla Meryem</b>,
        l’Union Nationale des Femmes du Maroc œuvre, par une multitude d’actions
        concrètes et convergentes, à garantir les droits des femmes, à les
        protéger contre toutes formes de violences et à favoriser leur pleine
        participation à l’économie et au développement du Royaume.
        <Text>
          Pour ce faire, l’UNFM déploie une multitude de programmes destinés à
          soutenir les personnes en difficulté et à promouvoir la capacitation
          des femmes et des jeunes filles, un levier pour une croissance plus
          inclusive et plus durable.
        </Text>
      </Text>
      <ButtonWrapper>
        <ShowMore>
          <ButtonText>En savoir plus</ButtonText>
          <ArrowForwardIcon color="inherit" fontSize="inherit" />
        </ShowMore>
      </ButtonWrapper>
    </Content>
  </Wrapper>
);

export default Article;
