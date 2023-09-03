import styled from "@emotion/styled";
import { responsive } from "../../styles/mixins";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { alpha } from "@mui/material";

export const CustomCarousel = styled(Carousel)`
  & .react-multi-carousel-item {
    > div {
      width: 640px;
    }
  }

  ${responsive.sm`
  & .react-multi-carousel-item {
    > div {
      width: 100%;
    }
  }

  `}
`;

export const Wrapper = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  padding: 2rem 0rem;

  ${({ color }) =>
    color
      ? `
      border-radius: 18.75rem;
     
      background: linear-gradient(
        180deg,
        ${alpha(color, 0.06)} 0%,
        ${alpha(color, 0.0)} 100%
      );
      @media (max-width: 1200px) {
        border-radius: 12rem;

      }

      @media (max-width: 767px) {
        border-radius: 8rem;

      }

      @media (max-width: 540px) {
        border-radius: 5rem;

      }
    
 
  `
      : ""}
`;

export const Activity = styled.div`
  border-radius: 0.5rem;
  height: 22rem;
  display: flex;
  padding: 0rem 1rem;
`;

export const ActivityContent = styled.div`
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  background: rgba(20, 64, 86, 0.06);
  padding: 1rem;
  width: 420px;
  ${responsive.sm`
  width: 100%;


  `}
`;

export const DescriptionContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.blue[100]};
  text-align: justify;

  font-size: 1em;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2rem; /* 100% */
`;
export const Description = styled.span`
  color: ${({ theme }) => theme.colors.grey[200]};
  text-align: justify;

  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 119% */
`;

export const ActivityTag = styled.div`
  color: ${({ theme }) => theme.colors.green[200]};
  background-color: ${({ theme }) => theme.colors.white[200]};

  font-size: 0.5rem;
  font-style: normal;
  font-weight: 700;
  border-radius: 0.5rem;
  width: fit-content !important;
  padding: 0.1rem 0.3rem;
`;

export const ActivitiesWrapper = styled.div<{
  length: number;
  padding: number;
}>`
  width: 100%;

  padding: ${({ length, padding }) =>
    `3rem ${
      length <= 1
        ? `${padding}px 3rem ${padding}px`
        : `0rem 3rem ${padding * 2}px`
    } `};
  ${responsive.sm`
  padding:3rem 10% 3rem 10%;
  
  
    `}

  ${responsive.xs`
  padding:3rem 5% 3rem 5%;
  
  
    `}
`;

export const ImageWrapper = styled.div`
  height: 22rem;
  width: 220px;
  overflow: hidden;
  position: relative;
  border-radius: 0.5rem 0rem 0rem 0.5rem;
`;
