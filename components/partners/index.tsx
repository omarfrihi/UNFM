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
};
const Partners = ({ title, data }: PartnersProps) => {
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
  return (
    <Wrapper>
      <Title>{title}</Title>
      <List>
        {data.map(({ title, partners }) => (
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
                    <Image src={src} layout="fill" objectFit="contain"></Image>
                  </Partner>
                </PartnerContainer>
              ))}
            </Carousel>
          </Line>
        ))}
      </List>
    </Wrapper>
  );
};

export default Partners;
