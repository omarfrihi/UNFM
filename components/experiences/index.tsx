import {
  Content,
  ContentText,
  EndContent,
  Experience,
  ExperiencesWrapper,
  Fonction,
  Header,
  ImageWrapper,
  Name,
  StartContent,
  StyledArrows,
  Title,
  Wrapper,
} from "./styles";
import Image from "../Image";
import NextImage from "next/image";

import React, { useRef } from "react";
import Slider from "react-slick";
import Arrows from "../Arrows";
import { Media } from "../../strapi/types";
var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};
export type ExperiencesProps = {
  title: string;
  data: {
    personImage: Media;
    name: string;
    fonction: string;
    text: string;
  }[];
};
const Experiences = ({ title, data }: ExperiencesProps) => {
  const ref = useRef(null);
  const handleNextSlide = () => {
    //@ts-ignore
    ref?.current?.slickNext();
  };

  const handlePrevSlide = () => {
    //@ts-ignore

    ref?.current?.slickPrev();
  };
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ExperiencesWrapper>
        <Slider {...settings} ref={ref}>
          {data.map(({ personImage, name, fonction, text }) => (
            <Experience key={name}>
              <Header>
                <ImageWrapper>
                  <Image src={personImage} layout="fill"></Image>
                </ImageWrapper>
                <Name>{name}</Name>
                <Fonction>{fonction}</Fonction>
              </Header>
              <Content>
                <StartContent>
                  <NextImage
                    src={require("../../public/assets/start.png")}
                    alt="start"
                    width={30}
                    height={30}
                  ></NextImage>
                </StartContent>
                <ContentText>{text}</ContentText>
                <EndContent>
                  <NextImage
                    src={require("../../public/assets/end.png")}
                    alt="end"
                    width={30}
                    height={30}
                  ></NextImage>
                </EndContent>
              </Content>
            </Experience>
          ))}
        </Slider>
      </ExperiencesWrapper>
      <StyledArrows prev={handlePrevSlide} next={handleNextSlide} />
    </Wrapper>
  );
};

export default Experiences;
