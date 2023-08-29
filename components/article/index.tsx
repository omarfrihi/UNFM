import Image from "../Image";
import Button from "../Button";
import {
  ButtonWrapper,
  Content,
  ImageWrapper,
  Text,
  Title,
  Wrapper,
} from "./styles";
import ReactMarkdown from "react-markdown";
import { Media } from "../../strapi/types";

export type ArticleProps = {
  action: { link: string; text: string };
  data: {
    image: Media;
    title: string;
    content: string;
  };
};
const Article = ({ data: { image, title, content }, action }: ArticleProps) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image layout="responsive" placeholder="blur" src={image}></Image>
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <ReactMarkdown>{content}</ReactMarkdown>
        <ButtonWrapper>
          <Button href={action.link}>{action.text}</Button>
        </ButtonWrapper>
      </Content>
    </Wrapper>
  );
};

export default Article;
