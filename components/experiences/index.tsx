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
const Experiences = () => {
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
      <Title>Elles nous parlent de leur expérience</Title>
      <ExperiencesWrapper>
        <Slider {...settings} ref={ref}>
          {["1", "2"].map((key) => (
            <Experience key={key}>
              <Header>
                <ImageWrapper>
                  <Image
                    src={require("../../public/assets/person-experience.png")}
                    alt="person"
                    layout="fill"
                  ></Image>
                </ImageWrapper>
                <Name>Mme. Shamsal Houda ABAKAR KADADé</Name>
                <Fonction>
                  Présidente de la section «Solidatité et Développement Humain»
                  République du Tchad
                </Fonction>
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
                <ContentText>
                  {`Les formations organisées par l’UNFM auxquelles j’ai eu la chance de
            participer m’ont permis d’assimiler de nouvelles techniques et
            connaissances que j’ai transmises aux femmes tchadiennes afin qu’elles
            gagnent en indépendance. J’espère de tout cœur poursuivre ce
            partenariat avec « l’institution au grand cœur » qu’est l’UNFM.`}
                </ContentText>
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
