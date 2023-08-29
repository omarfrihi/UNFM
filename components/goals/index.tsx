import Image from "../Image";
import {
  Card,
  CardsContainer,
  CardWrapper,
  Content,
  Title,
  UnderLine,
  Wrapper,
} from "./styles";
import { Media } from "../../strapi/types";
export type GoalsProps = {
  title: string;
  data: { content: string; image: Media }[];
};
const Goals = ({ data, title }: GoalsProps) => (
  <Wrapper>
    <div>
      <Title>{title}</Title>
      <UnderLine />
    </div>
    <CardsContainer>
      {data.map(({ image, content }) => (
        <CardWrapper key={content}>
          <Card>
            <Image width={40} height={40} src={image}></Image>
            <Content>{content}</Content>
          </Card>
        </CardWrapper>
      ))}
    </CardsContainer>
  </Wrapper>
);

export default Goals;
