import styled from "@emotion/styled";
import Slider from "react-slick";

export const Carousel = styled(Slider)`
  & .slick-dots {
    bottom: 1.5rem;
  }
  & .slick-list {
    height: 50rem;
    width: 100%;
  }
`;
