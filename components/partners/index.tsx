import Image from "../Image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Title from "../title";
import {
  Line,
  List,
  Partner,
  PartnerContainer,
  PartnerTitle,
  Wrapper,
} from "./styles";
import { Media } from "../../strapi/types";
import { useWindowSize } from "@uidotdev/usehooks";

const settings = {
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  autoPlay: true,
  arrows: false,
  swipe: true,
};
export type PartnersProps = {
  title: string;
  data: { title: string; partners: Media[] }[];
  color?: string;
};

const Strok = ({ width }: { width: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={`${width}`}
    height="1"
    viewBox={`"0 0 ${width} 1"`}
    fill="none"
  >
    <path
      d="M0 0.5H1590"
      stroke="url(#paint0_linear_1328_6476)"
      stroke-opacity="0.6"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1328_6476"
        x1="1389.16"
        y1="1.51516"
        x2="0"
        y2="1.51516"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3F4D81" stop-opacity="0" />
        <stop offset="0.473958" stop-color="#3F4D81" />
        <stop offset="1" stop-color="#3F4D81" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
);
const Partners = ({ title, data, color }: PartnersProps) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1500 },
      items: 6.5,
    },
    desktop: {
      breakpoint: { max: 1500, min: 1300 },
      items: 5.5,
    },
    desktop2: {
      breakpoint: { max: 1300, min: 1050 },
      items: 4.5,
    },
    tablet: {
      breakpoint: { max: 1050, min: 800 },
      items: 3.5,
    },
    mobile: {
      breakpoint: { max: 800, min: 500 },
      items: 2.5,
    },
    mobile2: {
      breakpoint: { max: 500, min: 0 },
      items: 1.4,
    },
  };
  const { width } = useWindowSize();
  return (
    <Wrapper color={color}>
      <Title color={color}>{title}</Title>
      {color && (
        <Strok
          width={
            //@ts-ignore
            `${width - width * 0.3}`
          }
        />
      )}
      <List color={color}>
        {data.map(({ title, partners }) => (
          <>
            <Line key={title}>
              <PartnerTitle>{title}</PartnerTitle>
              <Carousel
                infinite={true}
                autoPlay={true}
                responsive={responsive}
                removeArrowOnDeviceType={[
                  "desktop",
                  "mobile",
                  "tablet",
                  "desktop2",
                  "superLargeDesktop",
                  "mobile2",
                ]}
                swipeable={true}
                draggable={true}
                //   {...settings}
                //   slidesToShow={Math.min(partners.length, 7)}
              >
                {partners.map((src, index) => (
                  <PartnerContainer key={index}>
                    <Partner>
                      <Image
                        src={src}
                        layout="fill"
                        objectFit="contain"
                      ></Image>
                    </Partner>
                  </PartnerContainer>
                ))}
              </Carousel>
            </Line>
          </>
        ))}
      </List>
      {color && (
        <Strok
          width={
            //@ts-ignore
            `${width - width * 0.3}`
          }
        />
      )}
    </Wrapper>
  );
};

export default Partners;
