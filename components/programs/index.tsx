import {
  Actions,
  Button,
  Buttons,
  Carousel,
  List,
  Slide,
  SlideWrapper,
  UnderLine,
  Wrapper,
} from "./styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Image from "next/image";
import Title from "../title";
import Arrows from "../Arrows";

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
};

const Programs = () => {
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
      <Actions>
        <div>
          <Title>Nos Programmes</Title>
          <UnderLine />
        </div>
        <Arrows prev={handlePrevSlide} next={handleNextSlide} />
      </Actions>
      <List>
        <Carousel {...settings} ref={ref}>
          <SlideWrapper>
            <Slide>
              <Image
                src={require("../../public/assets/program1.png")}
                alt="program1"
                width={100}
                height={125}
                placeholder="blur"
              />
            </Slide>
          </SlideWrapper>
          <SlideWrapper>
            <Slide>
              <Image
                src={require("../../public/assets/program2.png")}
                alt="program2"
                width={100}
                height={125}
                placeholder="blur"
              />
            </Slide>
          </SlideWrapper>
          <SlideWrapper>
            <Slide>
              <Image
                src={require("../../public/assets/program3.png")}
                alt="program3"
                width={100}
                height={125}
                placeholder="blur"
              />
            </Slide>
          </SlideWrapper>
          <SlideWrapper>
            <Slide>
              <Image
                src={require("../../public/assets/program4.png")}
                alt="program4"
                width={100}
                height={125}
                placeholder="blur"
              />
            </Slide>
          </SlideWrapper>
        </Carousel>
      </List>
    </Wrapper>
  );
};
export default Programs;
