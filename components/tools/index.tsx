import { Media } from "../../strapi/types";
import Title from "../title";
import {
  ContentWrapper,
  Description,
  ImageWrapper,
  Tool,
  ToolsWrapper,
  Wrapper,
} from "./styles";
import Image from "../Image";
import Link from "next/link";
export type ToolsProps = {
  title: string;
  data: {
    icon: Media;
    image: Media;
    text: string;
    id: number;
  }[];
};
const Tools = ({ data, title }: ToolsProps) => (
  <Wrapper>
    <ToolsWrapper>
      {data.map(({ icon, image, text, id }) => (
        <Link href={`/tools/${id}`} key={text}>
          <Tool>
            <ImageWrapper>
              <Image
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
