import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import { Carousel } from "./styles";
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};
const Banner = ({ data }: { data: string[] }) => {
  return (
    <Carousel {...settings} autoplay>
      {data.map((banner) => (
        <div key={banner}>
          <Image
            src={banner}
            alt="banner"
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
