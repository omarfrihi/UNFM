import styled from "@emotion/styled";
import { responsive } from "../../styles/mixins";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background-image: url("/assets/goals.png");
  background-size: cover;
  padding: 4rem 10%;
  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white[200]};
  text-align: center;
  font-family: Gilroy;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0.2rem;
`;

export const UnderLine = styled.div`
  margin: 0rem 20%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white[200]};
`;

export const Card = styled.div`
  height: 100%;
  align-items: stretch;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  background: linear-gradient(
    0deg,
    rgba(215, 215, 215, 0.85) 0%,
    rgba(255, 255, 255, 0.85) 100%
  );
`;
export const CardWrapper = styled.div`
  padding: 1rem;
  flex-basis: 50%;
  ${responsive.sm`
  flex-basis: 100%;
  `};
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.colors.blue[200]};
  text-align: justify;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
