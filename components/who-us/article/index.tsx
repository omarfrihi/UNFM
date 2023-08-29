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
import ReactMarkdown from "react-markdown";

const Article = ({
  data,
}: {
  data: {
    title?: string;
    image: string;
    content: string;
  }[];
}) => (
  <Wrapper>
    {data.map(({ title, image, content }) => (
      <ArticleContainer key={title}>
        <Content>
          {title && <Title>{title}</Title>}
          <ReactMarkdown>{content}</ReactMarkdown>
        </Content>
        <ImageWrapper>
          <Image
            layout="responsive"
            placeholder="blur"
            alt="article1"
            src={image}
          ></Image>
        </ImageWrapper>
      </ArticleContainer>
    ))}
  </Wrapper>
);

export default Article;
