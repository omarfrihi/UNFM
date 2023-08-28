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

import Image from "next/image";

export type NumbersProps = {
  logo?: string;
  data: { number: string; description: string }[];
};
const Numbers = ({ data, logo }: NumbersProps) => (
  <Wrapper>
    <ImgWrapper>
      <Image width={90} src={logo || Logo} alt="logo"></Image>
    </ImgWrapper>
    <Box>
      {data.map(({ number, description }) => (
        <NumberWrapper key={number}>
          <Image width={40} height={40} src={Cap} alt="cap"></Image>
          <Number>{number}</Number>
          <Text>{description}</Text>
        </NumberWrapper>
      ))}
    </Box>
  </Wrapper>
);

export default Numbers;
