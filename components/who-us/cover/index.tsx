import { Media } from "../../../strapi/types";
import { LoogWrapper, Wrapper, Title } from "./styles";
import Image from "../../Image";
import NextImage from "next/image";

export type CoverProps = {
  data: { image: Media; title?: string; fullMode?: boolean; logo?: Media };
};
const Cover = ({ data: { image, title, fullMode, logo } }: CoverProps) => (
  <Wrapper>
    {!fullMode && (
      <LoogWrapper>
        {logo ? (
          <Image src={logo} placeholder="blur" width={100}></Image>
        ) : (
          <NextImage
            src={require("../../../public/assets/logo3.png")}
            alt="logo"
            placeholder="blur"
            width={100}
          ></NextImage>
        )}
        <Title>{title}</Title>
      </LoogWrapper>
    )}

    <Image
      src={image}
      placeholder="blur"
      layout="fill"
      objectFit="cover"
    ></Image>
  </Wrapper>
);

export default Cover;
