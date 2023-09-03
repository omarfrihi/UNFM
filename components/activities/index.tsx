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
import "react-multi-carousel/lib/styles.css";
import { Media } from "../../strapi/types";
import Image from "../Image";
import { useWindowSize } from "@uidotdev/usehooks";

export type ActivityType = {
  cover: Media;
  title: string;
  tag: string;
  articles: {
    image: Media;
    content: string;
  }[];

  action?: string;
  id: number;
};
export const ActivityComponent = ({
  title,
  tag,
  articles,
  action,
  id,
  cover,
}: ActivityType) => {
  return (
    <Activity>
      <ImageWrapper>
        <Image src={cover} layout="fill" objectFit="cover" placeholder="blur" />
      </ImageWrapper>
      <ActivityContent>
        <ActivityTag>{tag}</ActivityTag>

        <ActivityTitle>{title}</ActivityTitle>
        <DescriptionContent>
          <Description>{articles[0].content.substring(0, 120)}...</Description>
          <Button href={`/activities/${id}`}>{action}</Button>
        </DescriptionContent>
      </ActivityContent>
    </Activity>
  );
};
export type ActivitiesProps = {
  title: string;
  action: string;
  data: ActivityType[];
  color?: string;
};
const Avtivities = ({ title, data, action, color }: ActivitiesProps) => {
  const ref = useRef(null);
  const { width } = useWindowSize();

  const handleNextSlide = () => {
    //@ts-ignore
    ref?.current?.next();
  };

  const handlePrevSlide = () => {
    //@ts-ignore

    ref?.current?.previous();
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1510 },
      items: Math.min(2.2, data.length),
    },
    desktop2: {
      breakpoint: { max: 1510, min: 1270 },
      items: Math.min(1.9, data.length),
    },
    desktop3: {
      breakpoint: { max: 1270, min: 1000 },
      items: Math.min(1.5, data.length),
    },
    desktop5: {
      breakpoint: { max: 1000, min: 860 },
      items: Math.min(1.3, data.length),
    },
    desktop4: {
      breakpoint: { max: 860, min: 0 },
      items: 1,
    },
  };
  const items = Object.values(responsive).find(
    //@ts-ignore
    ({ breakpoint: { max, min } }) => width <= max && width > min
  )?.items;
  const padding =
    //@ts-ignore
    (width -
      //@ts-ignore
      items * 640) /
    2;
  return (
    <Wrapper>
      <Title color={color}>{title}</Title>
      <ActivitiesWrapper length={items || 0} padding={padding}>
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
