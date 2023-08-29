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

export type ActivityType = {
  cover: string;
  title: string;
  tag: string;
  articles: {
    image: string;
    description: string;
  }[];

  action: string;
  id: string;
};
export const ActivityComponent = ({
  title,
  tag,
  articles,
  action,
  id,
}: ActivityType) => (
  <Activity>
    <ImageWrapper>
      <Image
        src={articles[0].image}
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
        <Description>
          {articles[0].description[0].substring(0, 120)}...
        </Description>
        <Button href={`/activities/${id}`}>{action}</Button>
      </DescriptionContent>
    </ActivityContent>
  </Activity>
);
export type ActivitiesProps = {
  title: string;
  action: string;
  data: ActivityType[];
};
const Avtivities = ({ title, data, action }: ActivitiesProps) => {
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
