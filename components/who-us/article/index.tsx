import Image from "../../Image";
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
import { Media } from "../../../strapi/types";

export type ArticleProps = {
  data: {
    title?: string;
    image: Media;
    content: string;
  }[];
};

const Article = ({ data }: ArticleProps) => (
  <Wrapper>
    {data.map(({ title, image, content }) => (
      <ArticleContainer key={title}>
        <Content>
          {title && <Title>{title}</Title>}
          <ReactMarkdown>{content}</ReactMarkdown>
        </Content>
        <ImageWrapper>
          <Image layout="responsive" placeholder="blur" src={image}></Image>
        </ImageWrapper>
      </ArticleContainer>
    ))}
  </Wrapper>
);

export default Article;
