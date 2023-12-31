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
  logo?: Media;
  data: { number: string; description: string; logo: Media }[];
  color?: string;
};
const Numbers = ({ data, logo, color }: NumbersProps) => (
  <Wrapper>
    <ImgWrapper>
      {logo ? (
        <Image height={100} src={logo}></Image>
      ) : (
        <ImageNext height={100} src={Logo} alt="logo"></ImageNext>
      )}
    </ImgWrapper>
    <Box>
      {data.map(({ number, description, logo }) => (
        <NumberWrapper key={number}>
          <Image width={40} height={40} src={logo}></Image>
          <Number clr={color}>{number}</Number>
          <Text>{description}</Text>
        </NumberWrapper>
      ))}
    </Box>
  </Wrapper>
);

export default Numbers;
