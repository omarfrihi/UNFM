import Image from "next/image";
import Title from "../title";
import {
  Line,
  List,
  Partner,
  PartnerContainer,
  PartnerList,
  PartnerTitle,
  PartnerWrapper,
  StyledSlider,
  Wrapper,
} from "./styles";

import React, { useEffect, useRef } from "react";
const settings = {
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  autoPlay: true,
  arrows: false,
  swipe: true,
};
const partners = [
  {
    title: "Partenaires internationaux",
    partners: [
      require("../../public/assets/partner1.png"),
      require("../../public/assets/partner2.png"),
      require("../../public/assets/partner3.png"),
      require("../../public/assets/partner4.png"),
    ],
  },
  {
    title: "Partenaires nationaux institutionnels",
    partners: [
      require("../../public/assets/partner5.png"),
      require("../../public/assets/partner6.png"),
      require("../../public/assets/partner7.png"),
      require("../../public/assets/partner8.png"),
      require("../../public/assets/partner9.png"),
      require("../../public/assets/partner1.png"),
    ],
  },
  {
    title: "Partenaires nationaux privés",

    partners: [
      require("../../public/assets/partner1.png"),
      require("../../public/assets/partner6.png"),
      require("../../public/assets/partner5.png"),
      require("../../public/assets/partner8.png"),
      require("../../public/assets/partner9.png"),
      require("../../public/assets/partner2.png"),
      require("../../public/assets/partner3.png"),
      require("../../public/assets/partner4.png"),
      require("../../public/assets/partner7.png"),
    ],
  },
];
const Partners = () => {
  return (
    <Wrapper>
      <Title>Nos Partenaires</Title>
      <List>
        {partners.map(({ title, partners }) => (
          <Line key={title}>
            <PartnerTitle>{title}</PartnerTitle>
            <StyledSlider {...settings}>
              {partners.map((src, index) => (
                <PartnerContainer key={index}>
                  <Partner>
                    <Image
                      src={src}
                      layout="fill"
                      objectFit="contain"
                      alt="partner"
                    ></Image>
                  </Partner>
                </PartnerContainer>
              ))}
            </StyledSlider>
          </Line>
        ))}
      </List>
    </Wrapper>
  );
};

export default Partners;
