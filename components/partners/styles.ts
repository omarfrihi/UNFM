import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const StyledSlider = styled(Slider)`
  & .slick-slide {
    margin: 0rem 0.5rem;
    width: fit-content !important;
  }
`;

export const PartnerList = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;
export const Wrapper = styled.div`
  padding: 3rem 10%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

export const PartnerTitle = styled.span`
color: ${({ theme }) => theme.colors.grey[300]}
text-align: center;
font-family: Poppins;
font-size: 1rem;
font-style: normal;
font-weight: 200;
line-height: normal;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const Partner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  width: 10rem;
  position: relative;
`;
export const PartnerContainer = styled.div`
  border-radius: 0.625rem;
  padding: 1rem;
  background: #f6f6f6;
  width: fit-content;
`;
export const PartnerWrapper = styled.div`
  padding: 1rem;
  background: white
  width: fit-content;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
