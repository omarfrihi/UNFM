import Image from "../Image";
import {
  Bar,
  BarWrapper,
  Card,
  CardsContainer,
  CardsWrapper,
  CardWrapper,
  Circle,
  CircleWrapper,
  Content,
  Direction,
  Title,
  UnderLine,
  Wrapper,
} from "./styles";
import { Media } from "../../strapi/types";
import { urlBuilder } from "../../strapi/utils";
export type GoalsProps = {
  title: string;
  color?: string;
  backgroundImage: Media;
  data: { content: string; image: Media }[];
};
const Goals = ({
  data,
  title,
  color = "#1C843B",
  backgroundImage,
  grayMode,
}: GoalsProps & { grayMode?: boolean }) => {
  console.log(
    "urlBuilder(backgroundImage).src",
    urlBuilder(backgroundImage).src
  );
  return (
    <Wrapper
      backgroundImage={urlBuilder(backgroundImage).src}
      grayMode={grayMode}
    >
      <div>
        <Title>{title}</Title>
        <UnderLine />
      </div>
      <CardsWrapper>
        <CardsContainer direction={Direction.LEFT}>
          {data
            .slice(0, Math.floor(data.length / 2))
            .map(({ image, content }, index) => (
              <CardWrapper key={content}>
                <Card>
                  <Image width={40} height={40} src={image}></Image>
                  <Content>{content}</Content>
                </Card>
                <BarWrapper>
                  <Bar invisible={index === 0} color={color} />
                  <Bar
                    color={color}
                    invisible={
                      index ===
                      data.slice(0, Math.floor(data.length / 2)).length - 1
                    }
                  />
                </BarWrapper>
                <CircleWrapper direction={Direction.RIGHT}>
                  <Circle clr={color} />
                </CircleWrapper>
              </CardWrapper>
            ))}
        </CardsContainer>
        <CardsContainer direction={Direction.RIGHT}>
          {data
            .slice(Math.floor(data.length / 2), data.length)
            .map(({ image, content }, index) => (
              <CardWrapper key={content}>
                <CircleWrapper direction={Direction.LEFT}>
                  <Circle clr={color} />
                </CircleWrapper>

                <BarWrapper>
                  <Bar invisible={index === 0} color={color} />
                  <Bar
                    color={color}
                    invisible={
                      index ===
                      data.slice(Math.floor(data.length / 2), data.length)
                        .length -
                        1
                    }
                  />
                </BarWrapper>
                <Card>
                  <Image width={40} height={40} src={image}></Image>
                  <Content>{content}</Content>
                </Card>
              </CardWrapper>
            ))}
        </CardsContainer>
      </CardsWrapper>
    </Wrapper>
  );
};

export default Goals;
