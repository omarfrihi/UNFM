import Title from "../title";
import { Description, Tool, ToolsWrapper, Wrapper } from "./styles";
import Image from "next/image";
const Tools = () => (
  <Wrapper>
    <ToolsWrapper>
      <Tool image={"/assets/tool1.png"}>
        <Image
          width={28}
          height={28}
          alt="tool1"
          src={require("../../public/assets/toolicon1.png")}
          placeholder="blur"
        ></Image>
        <Description>Associations accréditées</Description>
      </Tool>
      <Tool image={"/assets/tool2.png"}>
        <Image
          width={28}
          height={28}
          alt="tool1"
          src={require("../../public/assets/toolicon2.png")}
          placeholder="blur"
        ></Image>
        <Description>Complexes Lalla Meryem</Description>
      </Tool>
      <Tool image={"/assets/tool3.png"}>
        <Image
          width={28}
          height={28}
          alt="tool1"
          src={require("../../public/assets/toolicon3.png")}
          placeholder="blur"
        ></Image>
        <Description>Déclaration de Marrakech</Description>
      </Tool>
    </ToolsWrapper>

    <Title>Nos Moyens</Title>
  </Wrapper>
);

export default Tools;
