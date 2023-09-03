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
    image: Media;
    content: string;
  }[];
  color?: string;
};

const Article = ({ data, color }: ArticleProps) => (
  <Wrapper>
    {data.map(({ image, content }) => (
      <ArticleContainer key={content}>
        <Content>
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
