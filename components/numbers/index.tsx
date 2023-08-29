import {
  Box,
  ImgWrapper,
  Wrapper,
  Number,
  NumberWrapper,
  Text,
} from "./styles";
import Logo from "../../public/assets/logo2.png";
import Cap from "../../public/assets/cap.png";

import ImageNext from "next/image";
import Image from "../Image";

import { Media } from "../../strapi/types";

export type NumbersProps = {
  logo?: string;
  data: { number: string; description: string; logo: Media }[];
};
const Numbers = ({ data, logo }: NumbersProps) => (
  <Wrapper>
    <ImgWrapper>
      <ImageNext width={90} src={logo || Logo} alt="logo"></ImageNext>
    </ImgWrapper>
    <Box>
      {data.map(({ number, description, logo }) => (
        <NumberWrapper key={number}>
          <Image width={40} height={40} src={logo}></Image>
          <Number>{number}</Number>
          <Text>{description}</Text>
        </NumberWrapper>
      ))}
    </Box>
  </Wrapper>
);

export default Numbers;
