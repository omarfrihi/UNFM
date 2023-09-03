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
    content: string;
  };
};
const Article = ({ data: { image, content }, action }: ArticleProps) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          layout="responsive"
          placeholder="blur"
          src={image}
          width={250}
        ></Image>
      </ImageWrapper>
      <Content>
        <ReactMarkdown>{content}</ReactMarkdown>
        <ButtonWrapper>
          <Button href={action.link}>{action.text}</Button>
        </ButtonWrapper>
      </Content>
    </Wrapper>
  );
};

export default Article;
