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
import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
import Arrows from "../Arrows";
var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const Experiences = ({
  title,
  data,
}: {
  title: string;
  data: {
    personImage: string;
    name: string;
    fonction: string;
    text: string;
  }[];
}) => {
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
                  <Image src={personImage} alt="person" layout="fill"></Image>
                </ImageWrapper>
                <Name>{name}</Name>
                <Fonction>{fonction}</Fonction>
              </Header>
              <Content>
                <StartContent>
                  <Image
                    src={require("../../public/assets/start.png")}
                    alt="start"
                    width={30}
                    height={30}
                  ></Image>
                </StartContent>
                <ContentText>{text}</ContentText>
                <EndContent>
                  <Image
                    src={require("../../public/assets/end.png")}
                    alt="end"
                    width={30}
                    height={30}
                  ></Image>
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
