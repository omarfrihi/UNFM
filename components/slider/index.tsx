"use client";
import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Banner1 from "../../public/assets/banner1.gif";
import Banner2 from "../../public/assets/banner2.png";

import { Carousel } from "./styles";
const Banner = () => {
  return (
    <Carousel
      autoPlay
      showArrows={false}
      showStatus={false}
      infiniteLoop={true}
      showIndicators={true}
      dynamicHeight={true}
    >
      <div>
        <Image src={Banner2} alt="banner2" layout="responsive" loading="lazy" />
      </div>
      <div>
        <Image src={Banner1} alt="banner1" layout="responsive" loading="lazy" />
      </div>
    </Carousel>
  );
};
export default Banner;
