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
  autoPlay: true,
  arrows: false,
};
const Banner = () => {
  return (
    <Carousel {...settings}>
      <div>
        <Image
          src={require("../../public/assets/banner2.png")}
          alt="banner2"
          layout="responsive"
          loading="lazy"
          placeholder="blur"
        />
      </div>
      <div>
        <Image
          src={require("../../public/assets/banner1.gif")}
          alt="banner1"
          layout="responsive"
          loading="lazy"
        />
      </div>
    </Carousel>
  );
};
export default Banner;
