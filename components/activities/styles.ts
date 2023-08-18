import styled from "@emotion/styled";
import { responsive } from "../../styles/mixins";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const CustomCarousel = styled(Carousel)``;

export const Wrapper = styled.div`
  padding: 3rem 0rem 3rem 25%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  ${responsive.xl`
  padding-left:  15%;

  
  `}

  ${responsive.md`
  padding-left:  7%;

  
  `}
  ${responsive.sm`
  padding: 3rem 5%;

  
  `}
`;

export const ActivityImage = styled.div<{ image: any }>`
  border-radius: 0.5rem 0rem 0rem 0.5rem;
  background: url("${({ image }) => image}"), lightgray 50% / cover no-repeat;
  height: 100%;
  background-size: 100%;
  width: 10rem;
`;

export const Activity = styled.div`
  border-radius: 0.5rem;
  height: 20rem;
  display: flex;
`;

export const ActivityContent = styled.div`
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  background: rgba(20, 64, 86, 0.06);
  padding: 1rem;
  width: 18rem;
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
  font-family: Gilroy;
  font-size: 1em;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2rem; /* 100% */
`;
export const Description = styled.span`
  color: ${({ theme }) => theme.colors.grey[200]};
  text-align: justify;
  font-family: Gilroy;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 119% */
`;

export const ActivityTag = styled.div`
  color: ${({ theme }) => theme.colors.green[200]};
  background-color: ${({ theme }) => theme.colors.white[200]};
  font-family: Gilroy;
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 700;
  border-radius: 0.5rem;
  width: fit-content;
  padding: 0.1rem 0.3rem;
`;

export const ActivitiesWrapper = styled.div`
  width: 100%;
  ${responsive.sm`
  width:28rem;

  
  `}

  ${responsive.xs`
  width:22rem;

  
  `}
`;

export const ImageWrapper = styled.div`
  height: 20rem;
  width: 160px;
  overflow: hidden;
  position: relative;
  border-radius: 0.5rem 0rem 0rem 0.5rem;
`;
