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

const activities = [
  {
    image: require("../../public/assets/activity1.png"),
    tag: "Activités de l’UNFM",
    title: "Célébration de la Journée Internationale de la Femme 8 Mars 2021",
    description:
      "lancement de plusieurs programmes de développement au profit des femmes et des filles",
  },
  {
    image: require("../../public/assets/activity2.png"),
    tag: "Activités de l’UNFM",
    title:
      "L’Union Nationale des Femmes du Maroc récompense à Aghbala la lauréate de la première édition  du Prix Lalla Meryem de l’Innovation et de l’Excellence",
    description:
      "Aghbala (Province de Béni Mellal) – En application des Orientations Éclairées de Son Altesse Royale...",
  },
  {
    image: require("../../public/assets/activity2.png"),
    tag: "Activités de l’UNFM",
    title:
      "L’Union Nationale des Femmes du Maroc récompense à Aghbala la lauréate de la première édition  du Prix Lalla Meryem de l’Innovation et de l’Excellence",
    description:
      "Aghbala (Province de Béni Mellal) – En application des Orientations Éclairées de Son Altesse Royale...",
  },
  {
    image: require("../../public/assets/activity2.png"),
    tag: "Activités de l’UNFM",
    title:
      "L’Union Nationale des Femmes du Maroc récompense à Aghbala la lauréate de la première édition  du Prix Lalla Meryem de l’Innovation et de l’Excellence",
    description:
      "Aghbala (Province de Béni Mellal) – En application des Orientations Éclairées de Son Altesse Royale...",
  },
  {
    image: require("../../public/assets/activity1.png"),
    tag: "Activités de l’UNFM",
    title: "Célébration de la Journée Internationale de la Femme 8 Mars 2021",
    description:
      "lancement de plusieurs programmes de développement au profit des femmes et des filles",
  },
  {
    image: require("../../public/assets/activity1.png"),
    tag: "Activités de l’UNFM",
    title: "Célébration de la Journée Internationale de la Femme 8 Mars 2021",
    description:
      "lancement de plusieurs programmes de développement au profit des femmes et des filles",
  },
  {
    image: require("../../public/assets/activity1.png"),
    tag: "Activités de l’UNFM",
    title: "Célébration de la Journée Internationale de la Femme 8 Mars 2021",
    description:
      "lancement de plusieurs programmes de développement au profit des femmes et des filles",
  },
];

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
}: {
  title: string;
  image: string;
  tag: string;
  description: string;
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
        <Button>En savoir plus</Button>
      </DescriptionContent>
    </ActivityContent>
  </Activity>
);
const Avtivities = () => {
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
      <Title>Nos Activités</Title>
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
          {activities.map((activity) => (
            <div key={activity.title}>
              <ActivityComponent {...activity} />
            </div>
          ))}
        </CustomCarousel>
      </ActivitiesWrapper>
      <Arrows prev={handlePrevSlide} next={handleNextSlide} />
    </Wrapper>
  );
};

export default Avtivities;
