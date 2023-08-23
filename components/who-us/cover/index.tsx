import { LoogWrapper, Wrapper, Title } from "./styles";
import Image from "next/image";
const Cover = ({
  data: {
    image,
    title,
    fullMode,
    logo = require("../../../public/assets/logo3.png"),
  },
}: {
  data: { image: string; title?: string; fullMode?: boolean; logo?: string };
}) => (
  <Wrapper>
    {!fullMode && (
      <LoogWrapper>
        <Image src={logo} alt="banner" placeholder="blur" width={100}></Image>
        <Title>{title}</Title>
      </LoogWrapper>
    )}

    <Image
      src={image}
      alt="banner"
      placeholder="blur"
      layout="fill"
      objectFit="cover"
    ></Image>
  </Wrapper>
);

export default Cover;
