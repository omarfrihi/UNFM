import Image from "../Image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import { Carousel } from "./styles";
import { IMedia, Media } from "../../strapi/types";
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};
export type SliderProps = { data: IMedia[] };
const Banner = ({ data }: SliderProps) => {
  return (
    <Carousel {...settings} autoplay>
      {data.map((banner) => (
        <div key={JSON.stringify(banner)}>
          <Image
            src={{ data: banner }}
            layout="responsive"
            loading="lazy"
            placeholder="blur"
          />
        </div>
      ))}
    </Carousel>
  );
};
export default Banner;
