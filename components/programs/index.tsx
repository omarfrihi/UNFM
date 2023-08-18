import {
  Actions,
  BottomArrows,
  Button,
  Buttons,
  LeftArrows,
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styled from "@emotion/styled";

const CustomCarousel = styled(Carousel)`
  & .react-multi-carousel-item {
  }
`;

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
};

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 900 },
    items: 3,
  },
  desktop2: {
    breakpoint: { max: 900, min: 575.98 },
    items: 2,
  },
  desktop3: {
    breakpoint: { max: 575.98, min: 0 },
    items: 1,
  },
};

const Programs = () => {
  const ref = useRef(null);
  const handleNextSlide = () => {
    //@ts-ignore
    ref?.current?.next();
  };

  const handlePrevSlide = () => {
    //@ts-ignore

    ref?.current?.previous();
  };
  return (
    <Wrapper>
      <Actions>
        <div>
          <Title>Nos Programmes</Title>
          <UnderLine />
        </div>
        <LeftArrows>
          <Arrows prev={handlePrevSlide} next={handleNextSlide} />
        </LeftArrows>
      </Actions>
      <List>
        <CustomCarousel
          infinite={true}
          responsive={responsive}
          removeArrowOnDeviceType={["desktop", "desktop2", "desktop3"]}
          swipeable={true}
          draggable={true}
          ref={ref}
        >
          <Slide>
            <Image
              src={require("../../public/assets/program1.png")}
              alt="program1"
              width={100}
              height={125}
              placeholder="blur"
            />
          </Slide>
          <Slide>
            <Image
              src={require("../../public/assets/program2.png")}
              alt="program2"
              width={100}
              height={125}
              placeholder="blur"
            />
          </Slide>
          <Slide>
            <Image
              src={require("../../public/assets/program3.png")}
              alt="program3"
              width={100}
              height={125}
              placeholder="blur"
            />
          </Slide>
          <Slide>
            <Image
              src={require("../../public/assets/program4.png")}
              alt="program4"
              width={100}
              height={125}
              placeholder="blur"
            />
          </Slide>
        </CustomCarousel>
      </List>
      <BottomArrows>
        <Arrows prev={handlePrevSlide} next={handleNextSlide} />
      </BottomArrows>
    </Wrapper>
  );
};
export default Programs;
