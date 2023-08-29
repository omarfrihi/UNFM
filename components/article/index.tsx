import Image from "next/image";
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

export type ArticleProps = {
  action: { link: string; text: string };
  data: {
    image: string;
    title: string;
    content: string;
  };
};
const Article = ({ data: { image, title, content }, action }: ArticleProps) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          layout="responsive"
          placeholder="blur"
          alt="article1"
          src={image}
        ></Image>
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
