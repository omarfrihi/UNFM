import styled from "@emotion/styled";
import { responsive } from "../../styles/mixins";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const CustomCarousel = styled(Carousel)`
  & .react-multi-carousel-item {
    div {
      width: 100%;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  padding: 2rem 0rem;
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
  flex: 2;
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
  width: fit-content !important;
  padding: 0.1rem 0.3rem;
`;

export const ActivitiesWrapper = styled.div`
  width: 100%;

  padding: 3rem 0rem 3rem 16.5%;

  ${responsive.md`
  padding-left:  7%;

  
  `}
  ${responsive.sm`
  padding: 3rem 5%;

  
  `}
`;

export const ImageWrapper = styled.div`
  height: 22rem;
  flex: 1;
  overflow: hidden;
  position: relative;
  border-radius: 0.5rem 0rem 0rem 0.5rem;
`;
