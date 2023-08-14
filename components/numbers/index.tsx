"use client";

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
const numbers = [
  {
    number: "51",
    description: "Associations régionales",
  },
  {
    number: "86",
    description: "Centres de formation et d'innovation",
  },
  {
    number: "24h/7",
    description: "Plateforme kolonamaak, appli et numéro vert ",
  },
  {
    number: "+39k",
    description: "Bénéficiaires directes à travers l'ensemble du Royaume",
  },
  {
    number: "26",
    description: "Centres d'écoute",
  },
];
import Image from "next/image";
const Numbers = () => (
  <Wrapper>
    <Box>
      {numbers.map(({ number, description }) => (
        <NumberWrapper>
          <Image width={40} height={40} src={Cap} alt="cap"></Image>
          <Number>{number}</Number>
          <Text>{description}</Text>
        </NumberWrapper>
      ))}
      <ImgWrapper>
        <Image width={90} height={80} src={Logo} alt="logo"></Image>
      </ImgWrapper>
    </Box>
  </Wrapper>
);

export default Numbers;
