import Image from "next/image";
import { ReactNode } from "react";
import {
  Content,
  ImageWrapper,
  Text,
  Title,
  Wrapper,
  Article as ArticleContainer,
} from "./styles";

const Article = ({
  articles,
}: {
  articles: {
    title?: string;
    image: string;
    content: ReactNode;
    backgroundColor?: string;
  }[];
}) => (
  <Wrapper>
    {articles.map(({ title, image, content, backgroundColor }) => (
      <ArticleContainer key={title} backgroundColor={backgroundColor}>
        <ImageWrapper>
          <Image
            layout="responsive"
            placeholder="blur"
            alt="article1"
            src={image}
          ></Image>
        </ImageWrapper>
        <Content>
          {title && <Title>{title}</Title>}
          {content}
        </Content>
      </ArticleContainer>
    ))}
  </Wrapper>
);

export default Article;
