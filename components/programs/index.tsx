import Image from "../Image";
import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Arrows from "../Arrows";
import Title from "../title";
import {
  Actions,
  BottomArrows,
  ImageContainer,
  LeftArrows,
  List,
  Slide,
  SlideWrapper,
  UnderLine,
  Wrapper,
} from "./styles";

import styled from "@emotion/styled";
import Link from "next/link";
import { Media } from "../../strapi/types";
import { useWindowSize } from "@uidotdev/usehooks";

const CustomCarousel = styled(Carousel)`
  & .react-multi-carousel-item {
    div {
      width: 240px;
    }
  }
`;

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
};

export type ProgramsProps = {
  data: { id: number; image: Media }[];
  title: string;
};
const Programs = ({ data, title }: ProgramsProps) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 900 },
      items: Math.min(3, data.length),
    },
    desktop2: {
      breakpoint: { max: 900, min: 575.98 },
      items: Math.min(2, data.length),
    },
    desktop3: {
      breakpoint: { max: 575.98, min: 0 },
      items: 1,
    },
  };

  const ref = useRef(null);
  const handleNextSlide = () => {
    //@ts-ignore
    ref?.current?.next();
  };

  const handlePrevSlide = () => {
    //@ts-ignore

    ref?.current?.previous();
  };
  const { width } = useWindowSize();

  const items = Object.values(responsive).find(
    //@ts-ignore
    ({ breakpoint: { max, min } }) => width <= max && width > min
  )?.items;
  const padding =
    //@ts-ignore
    (width -
      //@ts-ignore
      items * 270 -
      //@ts-ignore

      (width <= 1200 ? 0 : 306)) /
    2;

  return (
    <Wrapper padding={padding}>
      <Actions>
        <div>
          <Title>{title}</Title>
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
          {data.map(({ id, image }) => (
            <Link href={`/programs/${id}`}>
              <SlideWrapper key={id}>
                <Slide>
                  <ImageContainer>
                    <Image src={image} layout="fill" objectFit="contain" />
                  </ImageContainer>
                </Slide>
              </SlideWrapper>
            </Link>
          ))}
        </CustomCarousel>
      </List>
      <BottomArrows>
        <Arrows prev={handlePrevSlide} next={handleNextSlide} />
      </BottomArrows>
    </Wrapper>
  );
};
export default Programs;
