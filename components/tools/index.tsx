import Title from "../title";
import {
  ContentWrapper,
  Description,
  ImageWrapper,
  Tool,
  ToolsWrapper,
  Wrapper,
} from "./styles";
import Image from "next/image";
import Link from "next/link";
export type ToolsProps = {
  title: string;
  data: {
    icon: string;
    image: string;
    text: string;
    link: string;
  }[];
};
const Tools = ({ data, title }: ToolsProps) => (
  <Wrapper>
    <ToolsWrapper>
      {data.map(({ icon, image, text, link }) => (
        <Link href={link} key={text}>
          <Tool>
            <ImageWrapper>
              <Image
                alt="tool"
                src={image}
                placeholder="blur"
                layout="fill"
                objectFit="cover"
              ></Image>
            </ImageWrapper>
            <ContentWrapper>
              <Image
                width={28}
                height={28}
                alt="tool1"
                src={icon}
                placeholder="blur"
              ></Image>
              <Description>{text}</Description>
            </ContentWrapper>
          </Tool>
        </Link>
      ))}
    </ToolsWrapper>

    <Title>{title}</Title>
  </Wrapper>
);

export default Tools;
