import Button from "../Button";
import Title from "../title";
import {
  Activity,
  ActivityContent,
  Wrapper,
  Title as ActivityTitle,
  Description,
  DescriptionContent,
  ActivityTag,
  ActivitiesWrapper,
  ImageWrapper,
  CustomCarousel,
} from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import Arrows from "../Arrows";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1380 },
    items: 2.5,
  },
  desktop2: {
    breakpoint: { max: 1380, min: 1200 },
    items: 2.2,
  },
  desktop3: {
    breakpoint: { max: 1200, min: 920 },
    items: 1.7,
  },
  desktop5: {
    breakpoint: { max: 920, min: 767 },
    items: 1.5,
  },
  desktop4: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};
var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
};

export const ActivityComponent = ({
  title,
  image,
  tag,
  description,
  action,
  link,
}: {
  title: string;
  image: string;
  tag: string;
  description: string;
  action: string;
  link: string;
}) => (
  <Activity>
    <ImageWrapper>
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
      />
    </ImageWrapper>
    <ActivityContent>
      <ActivityTag>{tag}</ActivityTag>

      <ActivityTitle>{title}</ActivityTitle>
      <DescriptionContent>
        <Description>{description}</Description>
        <Button href={link}>{action}</Button>
      </DescriptionContent>
    </ActivityContent>
  </Activity>
);
const Avtivities = ({
  title,
  data,
  action,
}: {
  title: string;
  action: string;
  data: {
    title: string;
    image: string;
    tag: string;
    description: string;
    link: string;
  }[];
}) => {
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
      <Title>{title}</Title>
      <ActivitiesWrapper>
        <CustomCarousel
          infinite={true}
          responsive={responsive}
          removeArrowOnDeviceType={[
            "desktop",
            "desktop2",
            "desktop3",
            "desktop4",
            "desktop5",
          ]}
          swipeable={true}
          draggable={true}
          ref={ref}
        >
          {data.map((activity) => (
            <div key={activity.title}>
              <ActivityComponent {...activity} action={action} />
            </div>
          ))}
        </CustomCarousel>
      </ActivitiesWrapper>
      <Arrows prev={handlePrevSlide} next={handleNextSlide} />
    </Wrapper>
  );
};

export default Avtivities;
