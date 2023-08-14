import styled from "@emotion/styled";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background: linear-gradient(
      0deg,
      rgba(30, 0, 44, 0.4) 0%,
      rgba(30, 0, 44, 0.4) 100%
    ),
    linear-gradient(0deg, rgba(2, 48, 71, 0.1) 0%, rgba(2, 48, 71, 0.1) 100%),
    url("/assets/goals.png"), lightgray 50% / cover no-repeat;
  background-blend-mode: color, normal, normal;
  padding: 4rem 8rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white[200]};
  text-align: center;
  font-family: Gilroy;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Card = styled.div`
  height: 12rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  border-radius: 0.5rem;
  background: linear-gradient(
    0deg,
    rgba(215, 215, 215, 0.85) 0%,
    rgba(255, 255, 255, 0.85) 100%
  );
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.colors.blue[200]};
  text-align: justify;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
