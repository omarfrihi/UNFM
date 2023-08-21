import {
  Content,
  ImageWrapper,
  Img,
  Title,
  Wrapper,
  Text,
  ShowMore,
  ButtonWrapper,
  ButtonText,
} from "./styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import Button from "../Button";
import { ReactNode } from "react";

const Article = ({
  data: { image, title, content },
  action,
}: {
  action: { link: string; text: string };
  data: {
    image: string;
    title: string;
    content: string[];
  };
}) => {
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
        {content.map((c) => (
          <Text dangerouslySetInnerHTML={{ __html: c }} key={c}></Text>
        ))}

        <ButtonWrapper>
          <Button href={action.link}>{action.text}</Button>
        </ButtonWrapper>
      </Content>
    </Wrapper>
  );
};

export default Article;
