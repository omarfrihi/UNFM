import Image from "next/image";
import {
  Card,
  CardsContainer,
  CardWrapper,
  Content,
  Title,
  UnderLine,
  Wrapper,
} from "./styles";
export type GoalsProps = {
  title: string;
  data: { content: string; image: string }[];
};
const Goals = ({ data, title }: GoalsProps) => (
  <Wrapper>
    <div>
      <Title>{title}</Title>
      <UnderLine />
    </div>
    <CardsContainer>
      {data.map(({ image, content }) => (
        <CardWrapper key={image}>
          <Card>
            <Image width={40} height={40} alt="goal1" src={image}></Image>
            <Content>{content}</Content>
          </Card>
        </CardWrapper>
      ))}
    </CardsContainer>
  </Wrapper>
);

export default Goals;
