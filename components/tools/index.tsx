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
const Tools = () => (
  <Wrapper>
    <ToolsWrapper>
      <Tool>
        <ImageWrapper>
          <Image
            alt="tool1"
            src={require("../../public/assets/tool1.png")}
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
            src={require("../../public/assets/toolicon1.png")}
            placeholder="blur"
          ></Image>
          <Description>Associations accréditées</Description>
        </ContentWrapper>
      </Tool>
      <Tool>
        <ImageWrapper>
          <Image
            alt="tool2"
            src={require("../../public/assets/tool2.png")}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
          ></Image>
        </ImageWrapper>
        <ContentWrapper>
          <Image
            width={28}
            height={28}
            alt="tool2"
            src={require("../../public/assets/toolicon3.png")}
            placeholder="blur"
          ></Image>
          <Description>Complexes Lalla Meryem</Description>
        </ContentWrapper>
      </Tool>
      <Tool>
        <ImageWrapper>
          <Image
            alt="tool3"
            src={require("../../public/assets/tool3.png")}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
          ></Image>
        </ImageWrapper>
        <ContentWrapper>
          <Image
            width={28}
            height={28}
            alt="tool3"
            src={require("../../public/assets/toolicon3.png")}
            placeholder="blur"
          ></Image>
          <Description>Déclaration de Marrakech</Description>
        </ContentWrapper>
      </Tool>
    </ToolsWrapper>

    <Title>Nos Moyens</Title>
  </Wrapper>
);

export default Tools;
