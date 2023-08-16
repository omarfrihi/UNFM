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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  arrows: false,
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
const Partners = () => (
  <Wrapper>
    <Title>Nos Partenaires</Title>
    <List>
      {partners.map(({ title, partners }) => (
        <Line key={title}>
          <PartnerTitle>{title}</PartnerTitle>
          <PartnerList>
            {partners.map((src) => (
              <PartnerContainer key={src}>
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
          </PartnerList>
        </Line>
      ))}
    </List>
  </Wrapper>
);

export default Partners;
