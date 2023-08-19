import { LoogWrapper, Wrapper, ImageWrapper } from "./styles";
import Image from "next/image";
const Cover = () => (
  <Wrapper>
    <LoogWrapper>
      <ImageWrapper>
        <Image
          src={require("../../../public/assets/big-logo.png")}
          alt="banner"
          placeholder="blur"
          layout="fill"
          objectFit="contain"
        ></Image>
      </ImageWrapper>
    </LoogWrapper>

    <Image
      src={require("../../../public/assets/banner2.png")}
      alt="banner"
      placeholder="blur"
      layout="fill"
      objectFit="cover"
    ></Image>
  </Wrapper>
);

export default Cover;
