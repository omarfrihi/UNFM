"use client";
import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
          placeholder="blur"
        />
      </div>
    </Carousel>
  );
};
export default Banner;
