import { LoogWrapper, Wrapper, Title } from "./styles";
import Image from "next/image";
const Cover = ({
  data: { image, title },
}: {
  data: { image: string; title: string };
}) => (
  <Wrapper>
    <LoogWrapper>
      <Image
        src={require("../../../public/assets/logo3.png")}
        alt="banner"
        placeholder="blur"
        width={120}
      ></Image>
      <Title>{title}</Title>
    </LoogWrapper>

    <Image
      src={image}
      alt="banner"
      placeholder="blur"
      layout="fill"
      objectFit="cover"
      objectPosition="top"
    ></Image>
  </Wrapper>
);

export default Cover;
