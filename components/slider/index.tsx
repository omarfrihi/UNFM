"use client";
import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Banner1 from "../../public/assets/banner1.gif";
import { Carousel } from "./styles";
const Banner = () => {
  return (
    <Carousel
      autoPlay
      showArrows={false}
      showStatus={false}
      infiniteLoop={true}
    >
      <div>
        <Image src={Banner1} alt="banner1" />
      </div>
      <div>
        <Image src={Banner1} alt="banner2" />
      </div>
      <div>
        <Image src={Banner1} alt="banner3" />
      </div>
    </Carousel>
  );
};
export default Banner;
