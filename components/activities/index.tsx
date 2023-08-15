import Button from "../Button";
import Title from "../title";
import {
  Activity,
  ActivityImage,
  ActivityContent,
  Wrapper,
  Title as ActivityTitle,
  Description,
  DescriptionContent,
  ActivityTag,
  ActivitiesWrapper,
} from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import Arrows from "../Arrows";
import Image from "next/image";
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
var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
};
const Avtivities = () => {
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
      <Title>Nos Activités</Title>
      <ActivitiesWrapper>
        <Slider {...settings} ref={ref}>
          {activities.map(({ title, image, description, tag }) => (
            <div key={title}>
              <Activity>
                <Image
                  src={image}
                  alt={title}
                  height={240}
                  width={160}
                  placeholder="blur"
                />
                <ActivityContent>
                  <ActivityTag>{tag}</ActivityTag>

                  <ActivityTitle>{title}</ActivityTitle>
                  <DescriptionContent>
                    <Description>{description}</Description>
                    <Button>En savoir plus</Button>
                  </DescriptionContent>
                </ActivityContent>
              </Activity>
            </div>
          ))}
        </Slider>
      </ActivitiesWrapper>
      <Arrows prev={handlePrevSlide} next={handleNextSlide} />
    </Wrapper>
  );
};

export default Avtivities;
